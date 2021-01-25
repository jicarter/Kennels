export const Animal = ({ animal, customer, location  }) => (
    <section className="created__animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="location__address"> Location: {location.name}</div>
        <div className="customer__name">Customer: {customer.name}</div>
    </section>
)