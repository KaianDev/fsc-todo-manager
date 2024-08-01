import { createPortal } from 'react-dom'

import Button from './button'
import { Input } from './input'

interface Props {
  isOpen: boolean
  setIsOpen: (v: boolean) => void
}

const AddTaskDialog = ({ isOpen, setIsOpen }: Props) => {
  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-10 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div className="w-96 space-y-4 rounded-xl bg-white p-5 text-center shadow-sm">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-[#35383E]">Nova tarefa</h2>
          <p className="text-sm text-[#9A9C9F]">Insira as informações abaixo</p>
        </div>
        <Input
          label="Título"
          placeholder="Insira o título da tarefa"
          id="title"
        />
        <Input label="Horário" placeholder="Horário" id="time" />
        <Input
          label="Descrição"
          placeholder="Descreva a tarefa"
          id="description"
        />
        <div className="flex gap-3">
          <Button
            onClick={() => setIsOpen(false)}
            size="large"
            variant="secondary"
            className="w-full"
          >
            Cancelar
          </Button>
          <Button size="large" className="w-full">
            Salvar
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default AddTaskDialog
