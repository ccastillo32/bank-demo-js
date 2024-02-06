import { useEffect } from 'react'

import { RegistrationForm } from '../../components/register-form/RegistrationForm'

export function Register () {
  
  useEffect(() => {
    document.title = 'Register'
  }, [])

  return (
    <div className="d-flex align-items-center justify-content-center page-container">

      <RegistrationForm />

    </div>
  )
}