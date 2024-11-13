import React, { useState } from "react"
import '../App.css'
import Axios from 'axios'
import {Link, useNavigate} from "react-router-dom"
import ReCAPTCHA from 'react-google-recaptcha';
const Signup = () => {
    const [username, setUsername] = useState('')
    const[fullname,setFullname]=useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const navigate = useNavigate()
    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value); // Ensures captcha is verified
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!captchaVerified) {
            alert("Please complete the captcha.");
            return;
        }
        Axios.post('http://localhost:3000/auth/signup', {
            username,
            fullname,
            email,
            phone,
            password,
        }).then(response =>
            { 
                if(response.data.status){
                    navigate('/login')
                }
            }).catch(err =>
                {
                    console.log(err) 
                })
    };
    return (
        <div className="sign-up-container">
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="fullname">Full Name:</label>
                <input type="text" placeholder="Full Name"
                    onChange={(e) => setFullname(e.target.value)} />

                <label htmlFor="email">Email:</label>
                <input type="email" autoComplete="off" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="phone">Phone No:</label>
                <input type="number" placeholder="Phone No"
                    onChange={(e) => setPhone(e.target.value)} />

                <label htmlFor="PIN">PIN:</label>
                <input type="password" placeholder="*******"
                    onChange={(e) => setPassword(e.target.value)} />

                <ReCAPTCHA
                    sitekey="6LfzznoqAAAAALnufCLFqYgy5roRSOEziFXV-RiX"
                    onChange={handleCaptchaChange}
                />
                <button type="submit">Sign Up</button>
                <p>Already have an Account? <Link to="/login">Login</Link></p> 
            </form>
        </div>
    )
}

export default Signup