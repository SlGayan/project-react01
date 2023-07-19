
import './App.css';
import profile from "./image/a.png"
import email from "./image/email.jpg"
import pass from "./image/pass.png"
import text from './login/text';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  
  return (
    <div className='main'>
      <textform/>
      <div className ='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={profile} alt='profile' className='profile'/>
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            
            <div className='first-input'>
              <img src={email} alt='email' className='email'></img>
              <input type='text' placeholder='user-name' className='name'></input>
            </div>
            <div className='secoud-input'>
              <img src={pass} alt='pass' className='pass'></img>
              <input type='password' placeholder='Password' className='name'></input>
            </div>
            <div className='login-botton'>
            <button type='submit'>Login</button>
            </div>
          </div>
          <p className='link'>
            <a href='#'>Forgot Password ?</a> Or <a href='#'>Sign Up </a>
          </p>
          <router>
            <div>
              <switch>
                <route path='/'>
                  <text/>
                </route>
              </switch>
            </div>
          </router>
        </div>
      

      </div>
    </div>
  );
}

export default App;
