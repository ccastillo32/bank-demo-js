import './registration-form.css'

import { Form } from './Form'
import { Header } from './Header'
import { SignInMessage } from './SignInMessage'
import { BackButton } from './BackButton'

export function RegistrationForm () {
  return (
    <div className="card registration-form-card col-6 bg-transparent border-0">
        <div className="card-body">

          <Header />

          <Form />

          <SignInMessage />

          <BackButton />

        </div>
      </div>
  )
}