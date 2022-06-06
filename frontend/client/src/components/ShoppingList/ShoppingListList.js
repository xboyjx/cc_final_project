import React from 'react'
import ShoppingListItem from "./ShoppingListItems";


const ShoppingListList = ( { items, deleteItemFromList, user } ) => {

    // For loop to filter and gather count of occurences on joins 
    const itemIdAlreadyAdded = []
    const mappedItems = []
    for(let i = 0; i < items.length; i++){
        if(itemIdAlreadyAdded.includes(items[i].id) == false){
            let count = 0;
            for(let y =0; y<items.length; y++){
                if(items[y].id == items[i].id){
                    count++;
                }
            }
            mappedItems.push(<ShoppingListItem item={items[i]} key={i} count={count} deleteItemFromList={deleteItemFromList} user={user} />)
        }
        itemIdAlreadyAdded.push(items[i].id)
    }

    function getTotal(items){
        const arrayOfPrices = items.map(item => item.price);
        
        const total = arrayOfPrices.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);

        return total;
    }

    const totalOfBasket = getTotal(items);


    // const mappedItems = items.map((item, index) => {
    //     return <ShoppingListItem item={item} key={index} deleteItemFromList={deleteItemFromList} />
    // })

    return(
        <div>
            <table className="table">
                <tr>
                    <th>item</th>
                    <th>price</th>
                    <th>image</th>
                    <th>amount</th>
                    {/* <th>added by</th> */}
                    <th>remove</th>
                </tr>
                {mappedItems}
            </table>
            <p>Total: £{totalOfBasket.toFixed(2)}</p>
        </div>
    )
}

export default ShoppingListList;