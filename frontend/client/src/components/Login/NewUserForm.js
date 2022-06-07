import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react';

function NewUserForm( { addUserToFamily, createdUser } ) {

    const [details, setDetails] = useState({name: "", email:"", password: ""})
    const [familyId, setFamilyId]=useState(null)

    // const[createdUser, setCreatedUser] = useState("")

    // function addUserToFamily(familyId, details){
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type' : 'application/json'},
    //         body: JSON.stringify(details)
    //     }

    //     fetch(`http://localhost:8080/users/family/${familyId}`, requestOptions)
    //     .then(res => res.json())
    //     // .then(data => console.log(data))
    //     .then(data => setCreatedUser(data))
    // }

    const submitHandler = e => {
        e.preventDefault();

        console.log(details)
        console.log(familyId)


        addUserToFamily(familyId, details)

        setDetails({name:"", email:"", password:""})
        setFamilyId(null)

        // window.location.href = "http://localhost:3000/Login";

    }

  return (
      <div>
      <form onSubmit={submitHandler}>
          <div className='form-inner'>
              <h2>New User</h2>
              {createdUser ==null ? <p>Error: please re-enter details</p> : ""}
              <div className='new-user-form-group'>
                <label htmlFor='name'>name: </label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
              </div>
              <div className='new-user-form-group'>
                <label htmlFor='email'>Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
              </div>
              <div className='new-user-form-group'>
                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
              </div>
              <div className='new-user-form-group'>
                <label htmlFor='family-id'>Family invite code: </label>
                <input type="text" name="family-id" id="family-id" onChange={e => setFamilyId(e.target.value)} value={familyId}/>
              </div>
              <input type="submit" value="CREATE" />
          </div>
      </form>

      {createdUser != "" && createdUser != null ? <p>Account created for {createdUser.email} in the {createdUser.family.familyName} family</p> : ""}

      <Link to="/login">Back to Login page</Link>

      </div>
  )
}

export default NewUserForm