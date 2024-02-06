import { Link } from 'react-router-dom'

import './registration-form.css'

export function RegistrationForm () {
  return (
    <div className="card registration-form-card col-6 bg-transparent border-0">
        <div className="card-body">

          {/* Header */}
          <h1 className="form-header card-title mb-3">
            <i className="fa fa-edit"></i> Register
          </h1>

          {/* Form */}
          <form action="" className="registration-form">
            <div className="row">
              <div className="form-group col">
                <input type="text" name="first-name" className="form-control form-control-lg" placeholder="Enter first name" />
              </div>

              <div className="form-group col">
                <input type="text" name="last-name" className="form-control form-control-lg" placeholder="Enter last name" />
              </div>
            </div>

            <div className="form-group col">
              <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter email" />
            </div>

            <div className="row">
              <div className="form-group col">
                <input type="password" name="first-name" className="form-control form-control-lg" placeholder="Enter password" />
              </div>

              <div className="form-group col">
                <input type="password" name="last-name" className="form-control form-control-lg   " placeholder="Confirm password" />
              </div>
            </div>

            <div className="form-group col">
              <button className='btn btn-lg'>Register</button>
            </div>
          </form>

          {/* Sign in message */}
          <p className='card-text text-white my-2'>
            Already have an account? <span className='ms-2 text-warning'>Sign In</span>
          </p>

          {/* Back button */}
          <small className='text-warning'>
            <i className='fa fa-arrow-alt-circle-left'></i>
            <Link to='/' className='btn btn-sm text-warning'>
              Back
            </Link>
          </small>

        </div>
      </div>
  )
}