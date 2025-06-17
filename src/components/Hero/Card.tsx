import './Card.css'

interface Props {
  className?: string
  children: React.ReactNode
}

export default function Component({ className = '', children }: Props) {
  return (
    <div
      className={`card relative z-10 flex w-full max-w-[440px] flex-col items-center justify-center rounded-[1.75rem] bg-(--card-background) px-3.5 pt-18 pb-3.5 text-center text-white shadow-(--card-shadow) backdrop-blur-[6px] select-none ${className}`}
    >
      {children}
    </div>
  )
}
