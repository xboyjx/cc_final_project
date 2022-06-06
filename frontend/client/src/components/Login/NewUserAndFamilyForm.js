import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function NewUserAndFamilyForm() {
  
    const[familyFormDetails, setFamilyFormDetails] =useState({familyName:"", familyMembers:[], shoppingList:[]})
    const[familyDetails, setFamilyDetails] = useState(null)

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

        console.log(familyFormDetails)
        createFamily(familyFormDetails)
    }

  
    return (
        <div>
        {familyDetails == null ? 
            <form onSubmit={submitHandler}>
            <div>
                <h2>New family</h2>
                <div className='new-user-form-group'>
                    <label htmlFor='family-name'>name: </label>
                    <input type="text" name="family-name" id="family-name" onChange={e => setFamilyFormDetails({...familyFormDetails, familyName: e.target.value})} value={familyFormDetails.familyName}/>
                </div>
            </div>
              <input type="submit" value="CREATE" />
          </form> :
        
        <div>
            <p>Your families invite code is:{familyDetails.id}</p>
            <Link to="/new-user">Create new user</Link>
        </div>
        
        }
        
        </div>
      )}
    




//     <form onSubmit={submitHandler}>
//         <div>
//             <h2>New family</h2>
//             <div className='new-user-form-group'>
//                 <label htmlFor='family-name'>name: </label>
//                 <input type="text" name="family-name" id="family-name" onChange={e => setFamilyFormDetails({...familyFormDetails, familyName: e.target.value})} value={familyFormDetails.familyName}/>
//             </div>
//         </div>
//           <input type="submit" value="CREATE" />
//       </form>
//   )
// }

export default NewUserAndFamilyForm