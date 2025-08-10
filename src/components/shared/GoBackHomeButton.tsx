import { cn } from '@/lib/utils'
import LinkButton from './LinkButton'

interface Props {
  className?: string
}

export default function GoHomeButton({ className = '' }: Props) {
  return <LinkButton className={cn(className)}>← Go Back Home</LinkButton>
}
