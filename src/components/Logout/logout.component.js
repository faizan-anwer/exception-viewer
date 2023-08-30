import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'; // Import useHistory
export const Logout = () => {
    const navigate = useNavigate();
    const submitHandler = async () => {
        try {
        // e.preventDefault();
        console.log("Logout");
        
        const response = await fetch('http://localhost:3002/logout');
        if (response.ok) {
            // Logout was successful, navigate to a different page
            navigate('/login');
          } else {
            // Handle errors if necessary
          }
    } catch (error) {
        // Handle any errors that occurred
      }
    }
        useLayoutEffect(()=>{
            submitHandler();
        }, [])
  return (
    <div>{submitHandler}</div>
  )
}
