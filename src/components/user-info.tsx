import { fetchUsers, groupUsers } from '@/utils/user'

import { use } from 'react'
import TaskHeader from './task-header'
import { Card, CardContent } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ScrollArea } from './ui/scroll-area'

const userPromise = fetchUsers()

export default function UserInfo() {
  const { users } = use(userPromise)
  const groupedUsers = groupUsers(users)

  return (
    <>
      <TaskHeader
        title="2. Create data from API "
        description="Transform JSON data from API [https://dummyjson.com/users] by grouping department."
      />
      <Tabs defaultValue="department">
        <TabsList>
          <TabsTrigger value="department">Group by Department</TabsTrigger>
          <TabsTrigger value="raw">Raw data</TabsTrigger>
        </TabsList>
        <TabsContent value="raw">
          <Card>
            <CardContent>
              <ScrollArea className="text-sm h-[560px] md:h-[800px]">
                <pre>{JSON.stringify(users, null, 2)}</pre>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="department">
          <Card>
            <CardContent>
              <ScrollArea className="text-sm h-[560px] md:h-[800px]">
                <pre>{JSON.stringify(groupedUsers, null, 2)}</pre>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}
