
import './login.scss'

import { ReactComponent as Logo } from '../../assets/logos/logo-short-predicto.svg'
//Env imports
import { activeHost } from '../../__functions/evironment';

const LoginPage = () => {
  //Function handle submit on form
  const handleSubmitForm = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();

    const user = {
      email: e.target[0].value,
      password: e.target[1].value
    }

    fetch(`http://${activeHost}/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(user)
    }).then( res => console.log('Res :',res)).catch( err => console.log('Error :',err))
  }
  return (
    <div className='login'>
      <div className="session">
        <div className="left">
          <Logo />
        </div>
        <form className="log-in" onSubmit={handleSubmitForm}>
          <h4>
            We are <span>PREDICTO</span>
          </h4>
          <p>Welcome back! Log in to your account to view today's clients:</p>
          <div className="floating-label">
            <input placeholder="Email" type="email" name="email" id="email" />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="floating-label">
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
            <label htmlFor="password">Password:</label>
          </div>
          <button type="submit" /* onClick="return false;" */>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
