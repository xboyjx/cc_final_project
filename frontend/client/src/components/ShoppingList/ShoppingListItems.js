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
        // <>
        //     <tr>
        //         <td>{item.name}</td>
        //         <td>£{item.price.toFixed(2)}</td>
        //         <td><img src={item.imgUrl} height="200" width="200"></img> </td>
        //         <td>{count}</td>
        //         <td>{(count * item.price).toFixed(2)}</td>
        //         <td>{usersWhoAdded.toString()}</td>
        //         <td><button onClick={handleDeleteClick}>remove</button></td>
        //     </tr>
        // </>

        <>  
            <li className="table-row">
                <div className="col col-1" data-label="Item">{item.name}</div>
                <div className="col col-2" data-label="Price">£{item.price.toFixed(2)}</div>
                <div className="col col-3" data-label="Image"><img src={item.imgUrl} height="200" width="200"></img> </div>
                <div className="col col-4" data-label="Amount">{count}</div>
                <div className="col col-5" data-label="Total">{(count * item.price).toFixed(2)}</div>
                <div className="col col-6" data-label="Added By">{usersWhoAdded.toString()}</div>
                <div className="col col-7" data-label="Remove"><section><span class="trash" onClick={handleDeleteClick}><span></span><i></i></span></section></div>
            </li>
    </>
        

    )

}

export default ShoppingListItem;