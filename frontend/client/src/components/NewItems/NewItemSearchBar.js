import React from 'react'

const NewItemSearchBar = ({handleSearchTerm}) => {

    const handleChange = (event) => {
        handleSearchTerm(event.target.value)
    }

    return(
        <>
            <div>
                <h2>add an item: </h2>

                <input className="search-bar" type="text" placeholder="Search" name="searchedTerm" onChange={handleChange} />
            </div>
        </>
    )
}

export default NewItemSearchBar;