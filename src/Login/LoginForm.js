
import React, { useState, useRef } from 'react';
import axios from 'axios';
import './LoginPage.css';
import UserProfile from '../Components/UserProfile';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const userRef = useRef();
    const [email, setEmail1] = useState('');
    const [pwd, setPwd] = useState('');

    let Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const params = new URLSearchParams();
        params.append('email', email)
        params.append('password', pwd)
        const response = await axios.get(`http://127.0.0.1:8000/member-login/?${params.toString()}`);
        
        if(response.data.Password === pwd)
        {
            UserProfile.setName(response.data.FirstName);
            UserProfile.setEmail(response.data.Email);
            UserProfile.setMemberID(response.data.MemberID);
            Navigate('/', { replace: true })
        }
      }
    
    return (
        <form onSubmit={handleSubmit}>
        <div className="login-container-body">
            <div className="login-containment">
                <h1>Login</h1>
                <div className="login-input">
                <input type="text" id="Email" ref={userRef} onChange={(e) => setEmail1(e.target.value)} value={email} required />
                </div>
                <div className="login-input">
                <input type="password" id="password" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                </div>
                <button type="submit" className="submit-btn">Login</button>
                <div className="create-account-link">
                    <p>Create an account here: <a href="/createaccount">Signup</a></p>
                </div>
            </div>
        </div>
        </form>
    );
}

export default LoginForm;
