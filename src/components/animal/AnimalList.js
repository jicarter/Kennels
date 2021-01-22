import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { AnimalCard } from "./AnimalCard";
import { useHistory } from "react-router-dom";

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])


    animals.map(animal => {
      const owner = customers.find(c => c.id === animal.customerId)
      const clinic = locations.find(l => l.id === animal.locationId)
  
      return <Animal key={animal.id}
                  location={clinic}
                  customer={owner}
                  animal={animal} />
  })
  const history = useHistory()
  
  return (
      <>
          <h2>Animals</h2>
      <button onClick={() => {history.push("/animals/create")}}>
              Add Animal
          </button>
          <div className="animals">
          {
        animals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
          }
          </div>
      </>
  )
}
