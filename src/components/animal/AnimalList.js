import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { useHistory } from "react-router-dom";


export const AnimalList = () => {
    const { getAnimals, animals } = useContext(AnimalContext)
    const [ filteredAnimals, setFiltered ] = useState([])
    const history = useHistory()
    const [ searchTerms, setSearchTerms ] = useState("")
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
          // If the search field is not blank, display matching animals
          const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
          setFiltered(subset)
        } else {
          // If the search field is blank, display all animals
          setFiltered(animals)
        }
      }, [searchTerms, animals])
    
    return (
        <div className="animals">
          <h2>Animals</h2>
		      <button onClick={() => {history.push("/animals/create")}}>
            Add Animal
          </button>
          {
            filteredAnimals.map(animal => {
          return <Animal key={animal.id} animal={animal} />
            })
          }
        </div>
    )
}