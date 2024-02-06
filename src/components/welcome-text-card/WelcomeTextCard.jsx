import { Link } from 'react-router-dom'
import './welcome-text-card.css'

export function WelcomeTextCard () {
  return (
    <div id="welcome-text-card" className="card col-6 bg-transparent border-0">
      <div className="card-body">

        <h1>Easy-Way Bank</h1>

        <h5 className='card-title'>Flexible banking solutions</h5>

        <p className='card-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vero, 
          repellat quasi aliquid culpa voluptate maiores odit non ipsam officia natus 
          nostrum animi obcaecati expedita eius. Minus odio laboriosam eveniet!
        </p>

        <div className='button-wrapper d-flex align-items-center'>
          <Link to='register' className='btn btn-lg register'>Register</Link>
          <Link to='login' className='btn btn-lg login'>Login</Link>
        </div>
        
      </div>
    </div>
  )
}