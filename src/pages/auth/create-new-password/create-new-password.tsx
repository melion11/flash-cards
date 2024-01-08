import { Page } from '@components/ui'
import { CreateNewPasswordForm } from '@features/auth'

type SignInProps = {}

export const CreateNewPassword = (props: SignInProps) => {
  const {} = props

  return (
    <Page>
      <CreateNewPasswordForm onSubmit={() => {}} />
    </Page>
  )
}
