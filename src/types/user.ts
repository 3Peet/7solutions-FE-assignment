interface Coordinates {
  lat: number
  lng: number
}

interface Address {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: Coordinates
  country: string
}

interface Company {
  department: string
  name: string
  title: string
  address: Address
}

interface Hair {
  color: string
  type: string
}

export interface User {
  id: number
  firstName: string
  lastName: string
  age: number
  company: Company
  hair: Hair
  address: Address
  gender: 'male' | 'female'
}

export interface UsersResponse {
  users: User[]
  limit: number
  skip: number
  total: number
}