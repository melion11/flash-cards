import { Page } from '@components/ui'
import { SignInForm } from '@features/auth'

type SignInProps = {}

export const SignIn = (props: SignInProps) => {
  const {} = props

  return (
    <Page>
      <SignInForm />
    </Page>
  )
}
