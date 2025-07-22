import GoHomeButton from '@/components/shared/GoHomeButton'

export default function NotFound() {
  return (
    <>
      <div className='relative z-10 flex min-h-screen w-full flex-col items-center justify-center gap-4 text-center'>
        <span className='text-4xl font-medium'>404</span>

        <h1 className='text-4xl font-bold'>Page Not Found</h1>

        <p className='text-lg'>
          Sorry, the page you are looking for does not exist.
        </p>

        <GoHomeButton className='mt-1' />
      </div>
    </>
  )
}
