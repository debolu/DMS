// import Header from "../../../header";
import "./signin.css"
import { React, useState } from "react";
import signinForm from "./signinForm";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import  { FcGoogle } from "react-icons/fc";
// import SignIn from "./google-signin";

const Signin = () => {
    const [ business, setBusiness ] = useState(false)

    const handleSignin = (e) => {
        e.preventDefault()
        // const name = e.target.name
        // const value = e.target.value
    }

    return (
        <main className="signin" >
            <section className="signin-img-section">
                <h3>Our word is our truth; if we say we can do it, we will do it</h3>
            </section>
            <section className="signin-section signin-form">
                <h3>Get started with us</h3>
                <h6>sign up as:</h6>
                <div className="profile-btn">
                    <button className={business===false ? "active" : ""} onClick={()=> setBusiness(false)} >Consumer</button>
                    <button className={business===true ? "active" : ""} onClick={()=> setBusiness(true)}>Business</button>
                </div>
                <form action="" className="reg-form" onSubmit={(e) => handleSignin(e)} >
                    {business===false ? 
                        signinForm.individual.map((field)=> {
                            const { id, type, name } = field;
                            return <input key={id} type={type} name={name} placeholder={name} />
                        })
                    :  signinForm.Business.map((field)=> {
                        const { id, type, name } = field;
                        return <input key={id} type={type} name={name} placeholder={name} />
                    })  }
                    <h6>By creating an account you are agreeing to our <Link to="/privacy-policy" >Privacy Policy.</Link></h6>
                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>
                <h6>Already have an account? <Link to="/login" >Log in.</Link></h6>
                <Link to="/privacy-policy" >Privacy Policy.</Link>
                <h4 style={{margin: "10px auto"}}>Or</h4>

                {/* Signin with google and apple */}
                <div className="login-div">
                    {/* <SignIn /> */}
                    <button className="btn"><FaApple className=" signin-icon" /> Sign in with Apple</button>
                    <button className="btn"><FcGoogle className=" signin-icon" /> Sign in with Google</button>
                </div>
            </section>
        </main>
    )
}

export default Signin;