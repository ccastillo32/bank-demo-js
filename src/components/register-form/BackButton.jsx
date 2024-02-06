import { Link } from "react-router-dom";

export function BackButton () {
  return (
    <small className='text-warning'>
      <i className='fa fa-arrow-alt-circle-left'></i>
      <Link to='/' className='btn btn-sm text-warning'>
        Back
      </Link>
    </small>
  )
}