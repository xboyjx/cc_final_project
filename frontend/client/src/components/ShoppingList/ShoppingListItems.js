

const ShoppingListItem = ( { item, count, deleteItemFromList, user} ) => {

    const handleDeleteClick = () => {
        deleteItemFromList(user.family.id, item.id)
    }


    return(
        <>
            <tr>
                <td>{item.name}</td>
                <td>£{item.price.toFixed(2)}</td>
                <td><img src={item.imgUrl} height="200" width="200"></img> </td>
                <td>{count}</td>
                <td><button onClick={handleDeleteClick}>remove</button></td>
            </tr>
        </>
            
        

    )

}

export default ShoppingListItem;