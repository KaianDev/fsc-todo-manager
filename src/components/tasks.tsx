import { useState } from 'react'
import Button from './button'
import TrashIcon from '../assets/icons/trash.svg'
import AddIcon from '../assets/icons/add.svg'
import SunIcon from '../assets/icons/sun.svg'
import MoonIcon from '../assets/icons/moon.svg'
import CloudSunIcon from '../assets/icons/cloud-sun.svg'
import type { Task } from '../types/task'
import { TASKS } from '../constants/tasks'
import TaskItem from './task-item'
import TaskSeparator from './task-separator'

const Tasks = () => {
  const [tasks] = useState<Task[]>(TASKS)

  const morningTasks = tasks.filter((task) => task.period === 'morning')
  const afternoonTasks = tasks.filter((task) => task.period === 'afternoon')
  const nightTasks = tasks.filter((task) => task.period === 'night')

  return (
    <main className="flex-1 space-y-6 px-8 py-16">
      <div className="flex items-end justify-between">
        <div className="space-y-[6px] font-semibold">
          <span className="text-xs text-[#00ADB5]">Minhas Tarefas</span>
          <h2 className="text-xl text-[#35383E]">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button>
            Nova tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      {/* Tasks */}
      <section className="space-y-6 rounded-lg bg-white p-6 shadow">
        <div>
          <TaskSeparator title="Manhã" icon={<SunIcon />} />
          <div className="space-y-3">
            {morningTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div>
          <TaskSeparator title="Tarde" icon={<CloudSunIcon />} />
          <div className="space-y-3">
            {afternoonTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div>
          <TaskSeparator title="Noite" icon={<MoonIcon />} />
          <div className="space-y-3">
            {nightTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tasks
