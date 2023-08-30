import React, { useEffect, useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import axios from 'axios';
import './loginform.css';
function LoginForm({Login, error}) {
    const LoginContext = useContext();
    const [details, setDetail] = useState({name: "", email: "", password: ""});
    const [getSessionData, setGetSessionData]= useState({});
    const navigate = useNavigate(); // Get history object
    const submitHandler = async (e) => {
        e.preventDefault();
        //console.log(details);
        
        const response = await fetch('http://localhost:3002/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: details.name, password: details.password }),
        })
        .then((res)=>res.json())
        .then((data)=> setGetSessionData(data))
        .then(()=>navigate('/admin'))
        .catch((error)=> console.error('Login failed', error.message));

        // if (response.ok) {
        //     console.log('Login successful', response);
        //     // Redirect to admin page
        //     navigate('/admin');
        // } else {
        //     console.error('Login failed');
        //     // Handle failure, show error message, etc.
        // }
    }
    // async function postData(url = "", data = {}) {
    //     // Default options are marked with *
    //     const response = await fetch(url, {
    //       method: "POST", // *GET, POST, PUT, DELETE, etc.
    //       mode: "cors", // no-cors, *cors, same-origin
    //       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //       credentials: "same-origin", // include, *same-origin, omit
    //       headers: {
    //         "Content-Type": "application/json",
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       redirect: "follow", // manual, *follow, error
    //       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //       body: JSON.stringify(data), // body data type must match "Content-Type" header
    //     });
    //     return response.json(); // parses JSON response into native JavaScript objects
    //   }
    
  return (
    <form className='form-inner' onSubmit={submitHandler}>
        <h2>Login Form</h2>
        {(error !== '') ? (<div className='error'>Error</div>) :  null}
        <div className='form-group'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required onChange={ e=> setDetail({...details, name: e.target.value})} value={details.name}/>
        </div>
        <div className='form-group'>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required onChange={ e=> setDetail({...details, email: e.target.value})} value={details.email} />
        </div>
        <div className='form-group'>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={ e=> setDetail({...details, password: e.target.value})} value={details.password} />
        </div>
        <input type='submit' value="Login" />
    </form>
    
  )
}

export default LoginForm