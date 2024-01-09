import { Page } from '@components/ui'
import { SignUpForm } from '@features/auth'

type SignInProps = {}

export const SignUpPage = (props: SignInProps) => {
  const {} = props

  return (
    <Page>
      <SignUpForm onSubmit={() => {}} />
    </Page>
  )
}
