import './register.css'

export function Register () {
  return (
    <div className="d-flex align-items-center justify-content-center page-container">

      {/* Registration form */}
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

        </div>
      </div>

    </div>
  )
}