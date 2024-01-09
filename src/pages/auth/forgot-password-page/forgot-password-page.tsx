import { Page } from '@components/ui'
import { CheckEmail, ForgotPasswordForm } from '@features/auth'

type SignInProps = {}

export const ForgotPasswordPage = (props: SignInProps) => {
  const {} = props

  const isSuccses = false

  return (
    <Page>
      {!isSuccses && <ForgotPasswordForm onSubmit={() => {}} />}
      {isSuccses && <CheckEmail email={'lalala@gmail.com'} />}
    </Page>
  )
}
