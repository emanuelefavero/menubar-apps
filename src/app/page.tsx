import Hero from '@/components/Hero/Hero'

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

export default function Home() {
  return (
    <>
      <Hero />

      <TestScroll />
      <TestScroll />
    </>
  )
}
