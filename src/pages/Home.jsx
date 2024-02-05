import './home.css'

export function Home () {
  return (
    <div id="sample-text-card" className="card col-6 bg-transparent border-0">
      <div className="card-body">
        <h1>Easy-Way Bank</h1>
        <h5 className='card-title'>Flexible banking solutions</h5>
        <p className='card-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vero, 
          repellat quasi aliquid culpa voluptate maiores odit non ipsam officia natus 
          nostrum animi obcaecati expedita eius. Minus odio laboriosam eveniet!
        </p>
        <div className='button-wrapper d-flex align-items-center'>
          <a className="btn btn-md register" role="button">Register</a>
          <a className="btn btn-md login" role="button">Login</a>
        </div>
      </div>
    </div>
  )
}