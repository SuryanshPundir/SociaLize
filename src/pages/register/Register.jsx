import './Register.scss'
import { Link } from 'react-router-dom'
export default function Register() {
    return (
        <div className='register'>
            <div className="card">
                <div className="left">


                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="right">
                    <h1>Be Social.</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem numquam eaque, nam modi veniam quibusdam itaque nulla, nihil dolores necessitatibus unde? Veritatis!</p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}