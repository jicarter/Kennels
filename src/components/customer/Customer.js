import React from "react"
import "./Customer.css"

export const CustomerCard = ( { customer }) => (
    <section className="customer">
        <h3 className="customer__name"> {customer.name}</h3>
        <div className="customer__contact"> {customer.address}</div>
    </section>
)

