import { Separator } from './components/ui/separator'
import { Suspense } from 'react'
import TodoList from '@/components/todo-list'
import UserInfo from './components/user-info'

function App() {
  return (
    <main className="bg-accent">
      <div className="container mx-auto md:py-24">
        <div className="flex flex-col ">
          <TodoList />
          <Separator className="my-4 px-2" />
          <Suspense fallback={<p>Loading...</p>}>
            <UserInfo />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

export default App
