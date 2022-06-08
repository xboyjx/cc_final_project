import React from 'react'

const ShoppingListItem = ( { item, count, deleteItemFromList, user} ) => {

    const handleDeleteClick = () => {
        deleteItemFromList(user.family.id, item.id, item.users[0].id)
    }

    const userIdAlreadyAdded = []
    const usersWhoAdded = []
    for(let i = 0; i < item.users.length; i++){
        if(userIdAlreadyAdded.includes(item.users[i].id) == false){

            usersWhoAdded.push(item.users[i].name)
        }
        userIdAlreadyAdded.push(item.users[i].id)
    }


    return(
        <>
            <tr>
                <td>{item.name}</td>
                <td>£{item.price.toFixed(2)}</td>
                <td><img src={item.imgUrl} height="200" width="200"></img> </td>
                <td>{count}</td>
                <td>{(count * item.price).toFixed(2)}</td>
                <td>{usersWhoAdded.toString()}</td>
                <td><button onClick={handleDeleteClick}>remove</button></td>
            </tr>
        </>
            
        

    )

}

export default ShoppingListItem;