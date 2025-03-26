import { Separator } from './components/ui/separator'
import { Suspense } from 'react'
import TodoList from '@/components/todo-list'
import UserInfo from './components/user-info'

function App() {
  return (
    <main className="bg-background">
      <div className="container mx-auto py-4 md:py-12 md:px-8">
        <div className="flex flex-col px-2">
          <TodoList />
          <Separator className="my-6" />
          <Suspense fallback={<p>Loading...</p>}>
            <UserInfo />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

export default App
