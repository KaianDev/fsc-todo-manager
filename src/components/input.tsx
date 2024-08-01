import { ComponentProps } from 'react'

interface Props extends ComponentProps<'input'> {
  label: string
}

export const Input = ({ label, ...rest }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={rest.id}
        className="text-start text-sm font-semibold text-[#35383E]"
      >
        {label}
      </label>
      <input
        type="text"
        className="rounded-lg border border-[#ECECED] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
        {...rest}
      />
    </div>
  )
}
