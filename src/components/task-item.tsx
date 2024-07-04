import { Task } from '../types/task'
import CheckIcon from '../assets/icons/check.svg'
import Loader from '../assets/icons/loader.svg'

interface Props {
  task: Task
}

const TaskItem = ({ task }: Props) => {
  const getVariantClasses = () => {
    if (task.status === 'completed') return 'bg-[#00ADB5]/10'
    if (task.status === 'started') return 'bg-[#FFAA04]/10'
    if (task.status === 'not_started') return 'bg-[#35383E]/5'
  }

  const getVariantClassesToLabel = () => {
    if (task.status === 'completed') return 'bg-[#00ADB5]'
    if (task.status === 'started') return 'bg-[#FFAA04]'
    if (task.status === 'not_started') return 'bg-[#D9D9D9]'
  }

  return (
    <div
      className={`flex items-center justify-between rounded-lg p-3 pr-4 ${getVariantClasses()}`}
    >
      <div className="flex gap-3">
        <label
          className={`flex size-6 items-center justify-center rounded-md text-white ${getVariantClassesToLabel()}`}
        >
          {task.status === 'completed' && <CheckIcon />}
          {task.status === 'started' && (
            <div className="animate-spin">
              <Loader />
            </div>
          )}
          <input type="checkbox" className="sr-only" />
        </label>

        <p>{task.title}</p>
      </div>
    </div>
  )
}

export default TaskItem
