// Learning about React Bootstrap Card from
// Cards (no date) React Bootstrap.
// Available at: https://react-bootstrap.github.io/docs/components/cards/ (Accessed: 09 October 2023).
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

// Learning about PropTypes.shape for validating objects from
// Ferrari, C. (2019) How to specify the shape of an object with proptypes, DEV Community.
// Available at: https://dev.to/cesareferrari/how-to-specify-the-shape-of-an-object-with-proptypes-3c56 (Accessed: 09 October 2023).
Products.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

function ProductCard({ product }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: £{product.price}</Card.Text>
        <Card.Img src={product.img} />
      </Card.Body>
    </Card>
  );
}

export default function Products() {
  const products = [
    { name: "Spoon", description: "Wooden Spoon", price: 1, img: "" },
    { name: "Fork", description: "Metal Fork", price: 1, img: "" },
    { name: "Knife", description: "Plastic Knife", price: 1, img: "" },
    { name: "Spork", description: "Metal Spork", price: 1, img: "" },
    { name: "Plate", description: "Plastic Plate", price: 2, img: "" },
    { name: "Cup", description: "Clay Cup", price: 2, img: "" },
    { name: "Bowl", description: "Wooden Bowl", price: 2, img: "" },
    { name: "Mug", description: "Metal Mug", price: 3, img: "" },
    { name: "Ladle", description: "Metal Ladle", price: 4, img: "" },
    { name: "Glass", description: "Crystal Glass", price: 5, img: "" },
  ];

  return (
    <>
      <h2>Products</h2>
      <div className="card-container">
        {/* Loop through all producsts and put them inside cards */}
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </>
  );
}
