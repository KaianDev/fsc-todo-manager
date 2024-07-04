import Button from './button'
import TrashIcon from '../assets/icons/trash.svg'
import AddIcon from '../assets/icons/add.svg'

const Tasks = () => {
  return (
    <main className="flex-1 px-8 py-16">
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
    </main>
  )
}

export default Tasks
