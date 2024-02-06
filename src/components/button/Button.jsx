import './button.css'

export function Button (props) {
  const { name, mode } = props 

  return (
    <input type='button' value={name} className={ `btn btn-md ${mode}` } />
  )
}