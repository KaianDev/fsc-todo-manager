import { useState } from 'react'
import { toast } from 'sonner'

import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from '../assets/icons'
import { TASKS } from '../constants/tasks'
import type { Task } from '../types/task'
import AddTaskDialog from './add-task-dialog'
import Button from './button'
import TaskItem from './task-item'
import TaskSeparator from './task-separator'

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(TASKS)
  const [addDialogIsOpen, setIsOpenDialog] = useState(false)

  const morningTasks = tasks.filter((task) => task.period === 'morning')
  const afternoonTasks = tasks.filter((task) => task.period === 'afternoon')
  const nightTasks = tasks.filter((task) => task.period === 'night')

  const handleChangeStatusTaskItem = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => {
        if (prevTask.id !== taskId) {
          return prevTask
        }
        if (prevTask.status === 'completed') {
          toast.success('Tarefa reiniciada com sucesso!')
          return { ...prevTask, status: 'not_started' }
        }
        if (prevTask.status === 'not_started') {
          toast.success('Tarefa iniciada com sucesso!')
          return { ...prevTask, status: 'started' }
        }
        if (prevTask.status === 'started') {
          toast.success('Tarefa concluída com sucesso!')
          return { ...prevTask, status: 'completed' }
        }
        return prevTask
      }),
    )
  }

  const handleDeleteTaskItem = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter((prevTask) => prevTask.id !== taskId),
    )
    toast.success('Tarefa deletada com sucesso!')
  }

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
          <Button onClick={() => setIsOpenDialog(true)}>
            Nova tarefa
            <AddIcon />
          </Button>

          <AddTaskDialog isOpen={addDialogIsOpen} />
        </div>
      </div>

      {/* Tasks */}
      <section className="space-y-6 rounded-lg bg-white p-6 shadow">
        <div>
          <TaskSeparator title="Manhã" icon={<SunIcon />} />
          <div className="space-y-3">
            {morningTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onStatusChange={handleChangeStatusTaskItem}
                onDelete={handleDeleteTaskItem}
              />
            ))}
          </div>
        </div>

        <div>
          <TaskSeparator title="Tarde" icon={<CloudSunIcon />} />
          <div className="space-y-3">
            {afternoonTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onStatusChange={handleChangeStatusTaskItem}
                onDelete={handleDeleteTaskItem}
              />
            ))}
          </div>
        </div>

        <div>
          <TaskSeparator title="Noite" icon={<MoonIcon />} />
          <div className="space-y-3">
            {nightTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onStatusChange={handleChangeStatusTaskItem}
                onDelete={handleDeleteTaskItem}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tasks
