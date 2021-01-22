export const Animal = ({ animal, customer, location }) => (
    <section className="created__animal">
        <h3 className="animal__name">{animal.name}</h3>
        <breed className="animal__breed">{animal.breed}</breed>
        <address className="location__address"> Location: {animal.location.name}</address>
        <customer className="customer__name">Customer: {customer.name}</customer>
    </section>
)