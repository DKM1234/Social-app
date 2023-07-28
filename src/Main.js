import './App.css';
import React, { useState } from 'react';
import {auth, google} from './config/fire';
import {signInWithPopup, signOut} from 'firebase/auth';
import Dashboard from './dashboard/Dashboard';
import { Button } from 'react-bootstrap';

function Main() {

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)

  const LoginFalse = () => (
    <>
      
      {/* <button
      onClick={() => login(google)}>
        Login with Google
      </button> */}
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
      {/* <img src={user.photoURL} style={{width:50}}/>
      <p>Welcome {user.displayName} ! </p> */}

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
       <p style={{color: '#2fa959'}}>Welcome {user.displayName} ! </p>
      {/*<button style={{ marginLeft: 'auto' }} onClick={logout}>
        Logout
      </button> */}
      <Button variant="danger" 
      onClick={logout}
      size="sm"
      style={{ marginLeft: 'auto' }}
      >
         Logout
         </Button>
    </div>




     

      <Dashboard/>
      </div>
    </>
    
  )
  
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
