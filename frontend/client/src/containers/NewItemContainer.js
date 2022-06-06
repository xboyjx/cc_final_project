import React from 'react'
import { useEffect, useState } from "react"
import NewItemSearchBar from "../components/NewItems/NewItemSearchBar"
import SearchedResultsTable from "../components/NewItems/searchedResultsTable"
import SearchedResultsTableItem from "../components/NewItems/searchedResultsTableItem"


const NewItemContainer = ( {user} ) => {

    const [searchedTerm, setSearchedTerm] = useState(null)
    const [searchedResults, setSearchedResults] = useState([])

    useEffect (() => {
        if(searchedTerm !== null){
            fetchSearchResults()
        }
    }, [searchedTerm])

    const fetchSearchResults = function(){
        fetch(`http://localhost:8080/items/name_search==${searchedTerm}`)
        .then(res => res.json())
        .then(data => setSearchedResults(data))
    }


    const handleSearchTerm = (search) => {
        setSearchedTerm(search)
    }


    return(
        <div>
            <NewItemSearchBar handleSearchTerm={handleSearchTerm} />
            {searchedResults.length > 0? <SearchedResultsTable searchedResults={searchedResults} user={user} /> : null}
        </div>
    )
}

export default NewItemContainer;