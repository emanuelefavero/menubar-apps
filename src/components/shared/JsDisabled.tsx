export default function Component() {
  return (
    <noscript>
      <div className='absolute inset-0 z-[999] flex h-fit w-full animate-appear-slower items-center justify-center border-b border-(--warning-light) bg-(--warning-dark) px-2 py-2 text-center text-sm font-semibold text-(--bg-image-top)'>
        <div>JavaScript is disabled. Some features may not work.</div>
      </div>
    </noscript>
  )
}
