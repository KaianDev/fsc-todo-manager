import React from 'react'

interface Props {
  title: string
  icon: React.ReactNode
}

const TaskSeparator = ({ title, icon }: Props) => {
  return (
    <div className="mb-3 flex items-center gap-2 border-b-2 border-[#F4F4F5] pb-2 text-[#818181]">
      {icon}
      <p className="text-sm font-semibold">{title}</p>
    </div>
  )
}

export default TaskSeparator
