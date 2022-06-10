import React from 'react'
import './NewItems.css'

const NewItemSearchBar = ({handleSearchTerm}) => {

    const handleChange = (event) => {
        handleSearchTerm(event.target.value)
    }

    return(
        <>
        <form>
            <div className='form-inner'>
                <h2>Add an item: </h2>
                <div className='form-group'>
                    <input type="text" placeholder="Search" name="searchedTerm" onChange={handleChange} />
                </div>
            </div>
        </form>
        </>
    )
}

export default NewItemSearchBar;