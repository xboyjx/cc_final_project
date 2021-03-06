import React from 'react'
import SearchedResultsTableItem from "./searchedResultsTableItem";


const SearchedResultsTable = ({searchedResults, user}) => {

    const searchedResultsMapped = searchedResults.map((result, index) => {
        return <SearchedResultsTableItem result={result} key={index} user={user} />
    })

    return(

        <div className="container">
            <ul class="responsive-table">
                {searchedResultsMapped}
            </ul>
        </div>


    //     <div>
    //         <table className='table'>
    //             <tr>
    //                 <th>Name</th>
    //                 <th>Price</th>
    //                 <th>Image</th>
    //                 <th>add Item</th>
    //             </tr>
    //             {searchedResultsMapped}
    //         </table>
    //     </div>
    )
}

export default SearchedResultsTable;