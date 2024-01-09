import { Page } from '@components/ui'
import { SignInForm } from '@features/auth'

type SignInProps = {}

export const SignInPage = (props: SignInProps) => {
  const {} = props

  return (
    <Page>
      <SignInForm onSubmit={() => {}} />
    </Page>
  )
}
