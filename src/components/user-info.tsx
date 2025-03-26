import { fetchUsers, groupUsers } from '@/utils/user'

import { use } from 'react'
import TaskHeader from './task-header'

const userPromise = fetchUsers()

export default function UserInfo() {
  const { users } = use(userPromise)
  const groupedUsers = groupUsers(users)

  return (
    <>
      <TaskHeader
        title="2. Create data from API "
        description="Transform JSON data from API [https://dummyjson.com/users] by grouping department"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <pre className="text-sm">{JSON.stringify(groupedUsers, null, 2)}</pre>
      </div>
    </>
  )
}
