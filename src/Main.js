import React, { useState } from 'react';
import {auth, google} from './config/fire';
import {signInWithPopup, signOut} from 'firebase/auth';
import Dashboard from './dashboard/Dashboard';
import { DropdownButton, Dropdown, Button, Image } from 'react-bootstrap';
import './App.css';


function Main() {

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)

  const LoginFalse = () => (
    <>
      <h2 className='mt-5'>Welcome to Chat Application</h2>

      <Button variant="success" 
      onClick={() => login(google)}
      className='mt-5'
      >
         Login with Google
         </Button>
         
    </>
  )

  const LoginTrue = () => (
    <>
      <div className='container'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
          <p style={{ color: '#2fa959' }}>Welcome {user.displayName} ! </p>
          <DropdownButton id="dropdown-basic-button" size="sm" title="Edit Profile">
            <Dropdown.Item>
              <Image src={user.photoURL} roundedCircle style={{ width: '30px', height: '30px', marginRight: '10px' }} />
              Profile
            </Dropdown.Item>
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>Theme</Dropdown.Item>
            <Dropdown.Item>Notification</Dropdown.Item>
            <Dropdown.Item>Invite</Dropdown.Item>
            <Dropdown.Item>Setting</Dropdown.Item>
            <Dropdown.Item>
              <Button variant="danger" onClick={logout} size="sm" style={{ marginLeft: 'auto' }}>
                Logout
              </Button>
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <Dashboard />
      </div>
    </>
  );
  
  const login = async(provider) => {
    const result = await signInWithPopup(auth, provider) 
    setUser(result.user)
    setIsLogin(true)
  }

  const logout = async() => {
    const result = await signOut(auth)
    setUser(null)
    setIsLogin(false)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        
      {isLogin && user ? <LoginTrue/> : <LoginFalse/>}

      </header>
    </div>
  );
}

export default Main;
