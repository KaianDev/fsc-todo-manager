interface Props extends React.ComponentProps<'button'> {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'secondary'
  size?: 'small' | 'large'
}

const Button = ({
  children,
  variant = 'primary',
  size = 'small',
  className,
  ...rest
}: Props) => {
  const getVariantClasses = () => {
    if (variant === 'primary')
      return 'bg-[#00ADB5] text-white hover:bg-[#00ADB5]/80'
    if (variant === 'ghost')
      return 'bg-transparent text-[#818181] hover:bg-[#F0F0F0]'

    if (variant === 'secondary')
      return 'bg-[#EEEEEE] text-[#35383E] hover:bg-[#DEDEDE]'
  }

  const getSizeClasses = () => {
    if (size === 'small') {
      return ' py-1 text-xs'
    }

    if (size === 'large') {
      return 'py-2 text-sm'
    }
  }

  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-md px-3 font-semibold transition-colors ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
