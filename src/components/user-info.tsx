import { fetchUsers, groupUsers } from '@/utils/user'

import { use } from 'react'

const userPromise = fetchUsers()

export default function UserInfo() {
  const { users } = use(userPromise)
  const groupedUsers = groupUsers(users)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <pre>{JSON.stringify(groupedUsers, null, 2)}</pre>
    </div>
  )
}
