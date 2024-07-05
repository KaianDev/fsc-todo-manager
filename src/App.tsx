import { Toaster } from 'sonner'

import Sidebar from './components/sidebar'
import Tasks from './components/tasks'

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Tasks />
      <Toaster className="text-[#35383E]" />
    </div>
  )
}

export default App
