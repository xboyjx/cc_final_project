import React from 'react'

const SearchedResultsTableItem = ({result, user}) => {
    
    function addItemToList(familyId, itemId, userId){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json'},
        }

        fetch(`http://localhost:8080/families/${familyId}/item/${itemId}/user/${userId}`, requestOptions)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function handleAddClick(){
        addItemToList(user.family.id, result.id, user.id)
    }

    return(
        <>
            <tr>
                <td>{result.name}</td>
                <td>{result.price}</td>
                <td><img src={result.imgUrl} height="200" width="200"></img> </td>
                <td><button onClick={handleAddClick}>Add</button></td>
            </tr>
        </>
    )
}

export default SearchedResultsTableItem;