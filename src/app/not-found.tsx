import BackgroundImage from '@/components/shared/BackgroundImage'
import BackgroundShadow from '@/components/shared/BackgroundShadow'
import LinkAttribution from '@/components/shared/LinkAttribution'
import LinkButton from '@/components/shared/LinkButton'

// TODO: Remove TestScroll component used for testing scrolling effect

function TestScroll() {
  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-[rgb(235,239,241)] p-20 text-2xl text-gray-700 dark:bg-[rgb(30,37,48)] dark:text-gray-200'>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
        dignissimos! Esse quis cum quae harum dicta, corporis et, quam odit, ut
        aspernatur magni illum quibusdam tempora molestiae omnis suscipit eius
        commodi impedit? Consectetur itaque doloribus molestias voluptate
        sapiente sed aliquid repellat fugit quasi accusamus aspernatur corporis
        soluta consequuntur eum reprehenderit perspiciatis fugiat blanditiis
        tenetur, deleniti quibusdam nesciunt vero laudantium cumque? Nisi
        accusantium pariatur odio dignissimos tempora quae facilis magnam
        eveniet magni illum voluptas saepe perspiciatis maiores quaerat,
        asperiores itaque sunt omnis quo reiciendis optio quos provident rem
        nihil. Dolor possimus inventore minus. Voluptatum quaerat placeat, quas
        architecto iusto sequi voluptatibus?
      </p>
    </div>
  )
}

export default function NotFound() {
  return (
    <>
      <div className='relative flex min-h-screen flex-col items-center justify-center gap-4 overflow-hidden pt-12 text-center text-white'>
        <BackgroundImage
          src='/images/paul-pastourmatzis-unsplash.jpg'
          alt='Background'
          className='-z-10 object-cover object-center'
          priority
        />

        <div className='relative'>
          <BackgroundShadow bgColor='bg-gray-900/20' blur='blur-3xl' />

          <div className='relative z-10 flex flex-col items-center gap-4 text-center'>
            <span className='text-4xl font-medium'>404</span>

            <h1 className='text-4xl font-bold text-shadow-[var(--text-shadow-lg)]'>
              Page Not Found
            </h1>

            <p className='text-lg text-shadow-[var(--text-shadow-sm)]'>
              Sorry, the page you are looking for does not exist.
            </p>

            <LinkButton className='mt-1'>← Go back to Home</LinkButton>
          </div>
        </div>

        <LinkAttribution
          name='Paul Pastourmatzis'
          href='https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg'
        />
      </div>

      <TestScroll />
      <TestScroll />
    </>
  )
}
