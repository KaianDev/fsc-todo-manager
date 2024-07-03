import SideBarButton from './side-bar-button'
import HomeIcon from '../assets/icons/home.svg'
import TasksIcon from '../assets/icons/tasks.svg'

const SideBar = () => {
  return (
    <aside className="h-screen w-64 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p className="text-xs">
          Um simples{' '}
          <span className="font-semibold text-[#00ADB5]">
            organizador de tarefas
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SideBarButton href="#" variant="unselected">
          <HomeIcon />
          Início
        </SideBarButton>
        <SideBarButton href="#" variant="selected">
          <TasksIcon />
          Minhas Tarefas
        </SideBarButton>
      </div>
    </aside>
  )
}

export default SideBar
