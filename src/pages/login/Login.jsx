import './Login.scss'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem numquam eaque, nam modi veniam quibusdam itaque nulla, nihil dolores necessitatibus unde? Veritatis!</p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button>Login</button>

          </form>
        </div>
      </div>
    </div>
  )
}
