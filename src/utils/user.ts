import { User, UsersResponse } from '@/types/user'

const fetchUsers = async (): Promise<UsersResponse> => {
  const res = await fetch(
    'https://dummyjson.com/users?select=age,company,hair,address,gender,firstName,lastName&limit=0'
  )
  if (!res.ok) {
    throw new Error('Failed to fetch users')
  }
  return res.json()
}

const groupUsers = (users: User[]) => {
  const groupedData = users.reduce((acc, user) => {
    const department = user.company.department
    const gender = user.gender
    const hairColor = user.hair.color
    const fullName = `${user.firstName}${user.lastName}`
    const postalCode = user.address.postalCode

    if (!acc[department]) {
      acc[department] = {
        male: 0,
        female: 0,
        ageRange: '',
        hair: {},
        addressUser: {},
        ages: [] // Temporarily store ages for later calculation
      }
    }

    // Increment gender count
    acc[department][gender]++

    // Update hair color count
    if (!acc[department].hair[hairColor]) {
      acc[department].hair[hairColor] = 0
    }
    acc[department].hair[hairColor]++

    // Add user address
    acc[department].addressUser[fullName] = postalCode

    // Store age for later calculation
    if (acc[department].ages) {
      acc[department].ages.push(user.age)
    }

    return acc
  }, {} as Record<string, {
    male: number,
    female: number,
    ageRange: string,
    hair: Record<string, number>,
    addressUser: Record<string, string>,
    ages?: number[]
  }>)

  // Calculate age ranges
  Object.keys(groupedData).forEach(department => {
    const ages = groupedData[department].ages?.sort((a, b) => a - b) || []
    groupedData[department].ageRange = `${ages[0]}-${ages[ages.length - 1]}`
    delete groupedData[department].ages // Remove the temporary ages array
  })

  return groupedData
}

export {
  fetchUsers,
  groupUsers,
}
