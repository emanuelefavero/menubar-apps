import clsx from 'clsx'
import LinkButton from './LinkButton'

interface Props {
  className?: string
}

export default function GoHomeButton({ className = '' }: Props) {
  return <LinkButton className={clsx(className)}>← Go back home</LinkButton>
}
