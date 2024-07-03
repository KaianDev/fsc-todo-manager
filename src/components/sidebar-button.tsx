interface Props {
  href: string
  children: React.ReactNode
  variant: 'unselected' | 'selected'
}

const SidebarButton = ({ href, children, variant }: Props) => {
  const getVariantClasses = () => {
    if (variant === 'unselected') return 'text-[#35383E]'
    if (variant === 'selected') return 'bg-[#E6F7F8] text-[#00ADB5]'
  }

  return (
    <a
      href={href}
      className={`flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold ${getVariantClasses()}`}
    >
      {children}
    </a>
  )
}

export default SidebarButton
