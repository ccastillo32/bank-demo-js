import './register-button.css'

export function RegisterButton (props) {
  const {name} = props
  
  return (
    <input type='button' value={name} className='btn btn-md register' />
  )
}