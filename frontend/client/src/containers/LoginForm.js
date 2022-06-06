import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginForm({ login, error, loading }) {


    const [details, setDetails] = useState({name:"", email: "", password:""});

    const submitHandler = e => {
        e.preventDefault();

        login(details)
    }

  return (
    <div>
      {loading ? <p>loading</p> :<form onSubmit={submitHandler}>
          <div className='form-inner'>
              <h2>Login</h2>
              {error != "" ? (<div className='error'>{error}</div>): ""}
              <div className='form-group'>
                <label htmlFor='email'>Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
              </div>
              <input type="submit" value="LOGIN" />
          </div>
          <Link to="/new-user">Add new user to a family</Link>
          <br />
          <Link to="/new-user-and-family">new family</Link>
      </form>
  }
  </div>
  )
}

export default LoginForm;