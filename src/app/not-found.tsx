import CenteredMessage from '@/components/shared/CenteredMessage'
export default function NotFound() {
  return (
    <CenteredMessage
      kicker='404'
      title='Page Not Found'
      description='Sorry, the page you are looking for does not exist.'
      buttonLabel='← Go Back Home'
      buttonHref='/'
    />
  )
}
