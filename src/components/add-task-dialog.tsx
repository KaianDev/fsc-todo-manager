import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import Button from './button'
import { Input } from './input'

interface Props {
  isOpen: boolean
  setIsOpen: (v: boolean) => void
}

const AddTaskDialog = ({ isOpen, setIsOpen }: Props) => {
  const nodeRef = useRef(null)

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      unmountOnExit
      classNames={{
        appear: 'opacity-0',
        appearActive: 'transition-opacity duration-500 opacity-100',
        enter: 'opacity-0',
        enterActive: 'transition-opacity duration-500 opacity-100',
        exitActive: 'transition-opacity duration-500 opacity-0',
      }}
    >
      <div className="fixed inset-0 z-10 h-screen w-screen backdrop-blur-sm">
        {createPortal(
          <div
            ref={nodeRef}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <div className="w-96 space-y-4 rounded-xl bg-white p-5 text-center shadow-sm">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-[#35383E]">
                  Nova tarefa
                </h2>
                <p className="text-sm text-[#9A9C9F]">
                  Insira as informações abaixo
                </p>
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
        )}
      </div>
    </CSSTransition>
  )
}

export default AddTaskDialog
