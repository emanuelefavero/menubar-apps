import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// * cn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// * cx
// TIP: use it in client components when you don't need complex merging or class name deduplication.
export type CxClassValue = string | null | undefined | false | CxClassValue[]
export function cx(...inputs: CxClassValue[]) {
  return inputs
    .flat()
    .filter((x) => typeof x === 'string')
    .join(' ')
    .trim()
}

// * clsx/lite
// TIP: An alternative to `cx` from 'clsx' that only supports string patterns: `clsx('text-base', props.active && 'text-primary', props.className);`
// import { clsx } from 'clsx/lite'
