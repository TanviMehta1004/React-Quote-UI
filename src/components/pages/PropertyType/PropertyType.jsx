const PropertyType = () => {
  const propertyTypeList = [
    { id: 1, title: "Home", description: "Single-family home that you own." },
    { id: 2, title: "Townhome", description: "Multi-story home attached to similar homes by shared walls." },
    { id: 3, title: "Duplex", description: "I own the entire structure, but only reside in one unit." },
    { id: 4, title: "Mobile/manufactured home", description: "A prefabricated structure, built before being transported to the site." },
    { id: 5, title: "Other", description: "Any other home type that doesn't fit the above categories." },
  ];
  return (
    <div>
      <ul>
        {propertyTypeList.map((property) => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyType;