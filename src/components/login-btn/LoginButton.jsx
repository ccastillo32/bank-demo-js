import './login-button.css'

export function LoginButton (props) {
  const { name } = props 

  return (
    <input type='button' value={name} className='btn btn-md login' />
  )
}