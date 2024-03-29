import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'

function Login() {

    const INITIAL_LOGIN_OBJ = {
        password: "",
        emailId: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (loginObj.emailId.trim() === "") return setErrorMessage("Email Id is required! (use any value)")
        if (loginObj.password.trim() === "") return setErrorMessage("Password is required! (use any value)")
        else {
            setLoading(true)
            // Call API to check user credentials and save token in localstorage
            localStorage.setItem("token", "DumyTokenHere")
            setLoading(false)
            window.location.href = '/app/welcome'
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setLoginObj({ ...loginObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            {/* <div className="card mx-auto w-full max-w-5xl  shadow-xl"></div> */}
            <div className="card mx-auto w-full ">

                <div class="grid grid-cols-4 gap-4 bg-base-100 h-dvh h-screen ">

                    <div class="">
                    <img src="./logo-shade.png" alt="login Background" className="w-40"/>
                        <div className='py-7 px-10 mg-top'>
                             
                            <h2 className='text-2xl font-semibold mb-2 text-center text-blue-800'>Log in</h2>
                            <h3 className='text-base font-semibold mb-2 text-center'>Master Data Management</h3>
                            <form onSubmit={(e) => submitForm(e)}>
 
                                <div className="mb-4">

                                    <InputText type="emailId" defaultValue={loginObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue} />

                                    <InputText defaultValue={loginObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue} />

                                </div>

                                <div className='text-left text-primary'>
                                    <Link to="/forgot-password"><span className="text-sm  text-blue-950  transition duration-200">Forgot Password?</span></Link>
                                </div>

                                <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                                <button type="submit" className={"btn mt-5 w-full btn-primary rounded-full bg-blue-800" + (loading ? " loading" : "")}>Login</button>

                                <div className='text-center mt-4'>Don't have an account yet? <Link to="/register"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span></Link></div>
                            </form>
                       
                        <div class="login-logo m-auto">
                       <img src="./logo-login.jpg" alt="login Background" className="w-60  mt-10" />
                       
                        </div>
                        </div>
                        </div>
                    <div class="col-span-3"><LandingIntro /></div>
                </div>


            </div>
        </div>
    )
}

export default Login