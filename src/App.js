import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar/sidebar.component';
import Main from './components/Main/main.component';
import LoginForm from './components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';
import { Header } from './components/Header/header.component';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "password123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged on");
      setUser({
        name: details.name,
        email: details.user
      })
    } else {
      console.log("Not Matched on");
    }
  }
  const Logout = () => {
    console.log("Logout");
    setUser({
      name: "",
      email: ""
    })
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <Header />
      ) : <LoginForm Login={Login} error={error} />}

      
    </div>
  );
}

export default App;
