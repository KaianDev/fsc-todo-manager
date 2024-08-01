import { createPortal } from 'react-dom'

interface Props {
  isOpen: boolean
}

const AddTaskDialog = ({ isOpen }: Props) => {
  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-10 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div className="w-96 space-y-4 rounded-xl bg-white p-5 text-center shadow-sm">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-[#35383E]">Nova tarefa</h2>
          <p className="text-sm text-[#9A9C9F]">Insira as informações abaixo</p>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default AddTaskDialog
