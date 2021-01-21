import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerCard } from "./customer/Customer";
import { LocationCard } from "./location/Location";
import { EmployeeCard } from "./employee/Employee";
import { AnimalProvider } from "./animal/AnimalProvider";

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            {/* <Route path="/animals">
                <AnimalCard />
            </Route> */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>
            
            {/* Render the animal list when http://localhost:3000/customer */}
            <Route path="/customers">
                <CustomerCard />
            </Route>
            
            {/* Render the animal list when http://localhost:3000/location */}
            <Route path="/locations">
                <LocationCard />
            </Route>
            
            {/* Render the animal list when http://localhost:3000/employee */}
            <Route path="/employees">
                <EmployeeCard />
            </Route>

        </>
    )
}    