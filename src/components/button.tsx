interface Props extends React.ComponentProps<'button'> {
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
}

const Button = ({ children, variant = 'primary', ...rest }: Props) => {
  const getVariantClasses = () => {
    if (variant === 'primary')
      return 'bg-[#00ADB5] text-white hover:bg-[#00ADB5]/80'
    if (variant === 'ghost')
      return 'bg-transparent text-[#818181] hover:bg-[#F0F0F0]'
  }

  return (
    <button
      className={`flex items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold transition-colors ${getVariantClasses()}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
