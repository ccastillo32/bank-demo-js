export function Form () {
  return (
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
  )
}