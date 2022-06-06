import React from 'react'
import { useEffect, useState } from 'react';

function NewUserAndFamilyForm() {
  
    const[familyDetails, setFamilyDetails] =useState({familyName:"", familyMembers:[], shoppingList:[]})
    const[userDetails, setUserDetails] = useState({name: "", email:"", password: ""})

    const submitHandler = e => {
        e.preventDefault();

        console.log(familyDetails)
        console.log(userDetails)
    }

  
    return (
    <form onSubmit={submitHandler}>
        <div>
            <h2>New family</h2>
            <div className='new-user-form-group'>
                <label htmlFor='family-name'>name: </label>
                <input type="text" name="family-name" id="family-name" onChange={e => setFamilyDetails({...familyDetails, familyName: e.target.value})} value={familyDetails.familyName}/>
            </div>
        </div>



          <div className='form-inner'>
              <h2>New User</h2>
              <div className='new-user-form-group'>
                <label htmlFor='name'>name: </label>
                <input type="text" name="name" id="name" onChange={e => setUserDetails({...userDetails, name: e.target.value})} value={userDetails.name}/>
              </div>
              <div className='new-user-form-group'>
                <label htmlFor='email'>Email: </label>
                <input type="email" name="email" id="email" onChange={e => setUserDetails({...userDetails, email: e.target.value})} value={userDetails.email}/>
              </div>
              <div className='new-user-form-group'>
                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" id="password" onChange={e => setUserDetails({...userDetails, password: e.target.value})} value={userDetails.password}/>
              </div>
          </div>
          <input type="submit" value="CREATE" />
      </form>
  )
}

export default NewUserAndFamilyForm