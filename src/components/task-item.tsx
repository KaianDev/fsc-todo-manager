import { Task } from '../types/task'
import CheckIcon from '../assets/icons/check.svg'
import LoaderIcon from '../assets/icons/loader.svg'
import DetailsIcon from '../assets/icons/details.svg'

interface Props {
  task: Task
  onStatusChange: (taskId: number) => void
}

const TaskItem = ({ task, onStatusChange }: Props) => {
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
      className={`flex items-center justify-between rounded-lg p-3 pr-4 transition duration-150 ${getVariantClasses()}`}
    >
      <div className="flex gap-3">
        <label
          className={`flex size-6 cursor-pointer items-center justify-center rounded-md text-white ${getVariantClassesToLabel()}`}
        >
          {task.status === 'completed' && <CheckIcon />}
          {task.status === 'started' && (
            <div className="animate-spin">
              <LoaderIcon />
            </div>
          )}
          <input
            type="checkbox"
            onChange={() => onStatusChange(task.id)}
            checked={task.status === 'completed'}
            className="sr-only"
          />
        </label>

        <p>{task.title}</p>
      </div>
      <div>
        <a
          href="#"
          className="flex size-6 items-center justify-center text-[#9A9C9F] transition hover:scale-110"
        >
          <DetailsIcon />
        </a>
      </div>
    </div>
  )
}

export default TaskItem
