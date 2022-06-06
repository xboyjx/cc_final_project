import React from 'react'
import { useState, useEffect} from 'react'
import ShoppingListList from '../components/ShoppingList/ShoppingListList';

function ShoppingListContainer( {user} ){

    const [family, setFamily] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchDB = function(user){
        fetch(`http://localhost:8080/families/${user.family.id}`)
        .then(res => res.json())
        // .then(data => console.log(data[0]))
        .then(data => setFamily(data))
    }


    useEffect(() => {
        fetchDB(user)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    function deleteItemFromList(familyId, itemId){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json'},
        }

        fetch(`http://localhost:8080/families/${familyId}/removeItem/${itemId}`, requestOptions)
        .then(res => res.json())
        .then(data => setFamily(data))
    }


    return(
        <div className='shopping-list-container'>
            <div className='family-shopping-table'>
                <h2 className='family-shopping-list-title'>{family.familyName} family shopping list</h2>
                {loading === true ? <p>Loading</p> : <ShoppingListList items={family.shoppingList} deleteItemFromList={deleteItemFromList} user={user}/> }
            </div>
        </div>
    )
}

export default ShoppingListContainer;