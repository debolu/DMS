import { React } from "react";
import { Link } from "react-router-dom";
import { FaApple, FaGoogle } from "react-icons/fa";

const Login = () => {
    return(
        <main className="signin">
            <section className="login-img-section">
                <h3>We have high respect for our customers, you are our top priority</h3>
            </section>
            <section className="signin-section login-form">
                <h3>Welcome Back</h3>
                <h6>Let's do some business</h6>
                <form action="" className="reg-form">
                    <input name="Email" type="text" placeholder="Email or username"></input>
                    <input name="Password" type="password" placeholder="Password"></input>
                    <button type="submit" className="signup-btn">Log In</button>
                </form>
                <h6>Don't have an account? <Link to="/Sign-in" >Sign Up.</Link></h6>
                <h4 style={{margin: "10px auto"}}>Or</h4>
                {/* Buttons for login with apple and google. */}
                <div className="login-div">
                    <button className="btn"><FaApple className="signin-icon" /> Sign in with Apple</button>
                    <button className="btn"><FaGoogle className="signin-icon"/> Sign in with Google</button>
                </div>
            </section>
        </main>
    )
}

export default Login