import React from 'react'
import './LoginForm.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function NewUserAndFamilyForm() {
  
    const[familyFormDetails, setFamilyFormDetails] =useState({familyName:"", familyMembers:[], shoppingList:[]})
    const[familyDetails, setFamilyDetails] = useState(null)
    const[error, setError] = useState(false)

    function createFamily(newFamily){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(newFamily)
        }

        fetch(`http://localhost:8080/families`, requestOptions)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setFamilyDetails(data))
    }

    const submitHandler = e => {
        e.preventDefault();

        if(familyFormDetails.familyName != ""){
            createFamily(familyFormDetails)
        }
        else{
            setError(true)
        }


        // console.log(familyFormDetails)
        // createFamily(familyFormDetails)
    }

  
    return (

        <div>
        {familyDetails == null ? 
            <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>New family</h2>
                {error ? <p>Error - please add family name</p> : ""}
                <div className='form-group'>
                    <label htmlFor='family-name'>name: </label>
                    <input type="text" name="family-name" id="family-name" onChange={e => setFamilyFormDetails({...familyFormDetails, familyName: e.target.value})} value={familyFormDetails.familyName}/>
                </div>
              <input type="submit" value="CREATE" />
            </div>
          </form> :
        <form>
        <div className='form-inner'>
            <p>Your families invite code is:{familyDetails.id}</p>
            <Link to="/new-user">Create new user</Link>
        </div>
        </form>
        
        }
        
        </div>
        
      )}
    

export default NewUserAndFamilyForm