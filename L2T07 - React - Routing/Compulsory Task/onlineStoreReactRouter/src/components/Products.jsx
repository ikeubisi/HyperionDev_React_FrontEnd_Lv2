// Learning about React Bootstrap Card from
// Cards (no date) React Bootstrap.
// Available at: https://react-bootstrap.github.io/docs/components/cards/ (Accessed: 09 October 2023).
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import TotalPrice from "./TotalPrice";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Learning about PropTypes.shape for validating objects from
// Ferrari, C. (2019) How to specify the shape of an object with proptypes, DEV Community.
// Available at: https://dev.to/cesareferrari/how-to-specify-the-shape-of-an-object-with-proptypes-3c56 (Accessed: 09 October 2023).
// We validate ProductCard rather than Products
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

// Our products
const products = [
  {
    name: "Spoon",
    description: "Wooden Spoon",
    price: 1,
    img: "https://m.media-amazon.com/images/I/61moD4yrLOL.jpg",
  },
  {
    name: "Fork",
    description: "Metal Fork",
    price: 1,
    img: "https://m.media-amazon.com/images/I/61z0LVrrowL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Knife",
    description: "Plastic Knife",
    price: 1,
    img: "https://www.beaucare.com/storage/uploads/images/1291/product-hero_plastic_knife_-_white_-_pack_of_1000.jpg",
  },
  {
    name: "Spork",
    description: "Metal Spork",
    price: 1,
    img: "https://m.media-amazon.com/images/I/81H7YgQZjiL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Plate",
    description: "Plastic Plate",
    price: 2,
    img: "https://raven.contrado.app/resources/images/2017-12/75876/melamine-plastic-plate-design-reverse-side-208618_l.jpg",
  },
  {
    name: "Cup",
    description: "Clay Cup",
    price: 2,
    img: "https://www.minimax.com.au/cdn/shop/products/dwell-340ml-clay-mug-985663.jpg?v=1631892087",
  },
  {
    name: "Bowl",
    description: "Wooden Bowl",
    price: 2,
    img: "https://www.ikea.com/gb/en/images/products/blanda-matt-serving-bowl-bamboo__0711988_pe728640_s5.jpg",
  },
  {
    name: "Mug",
    description: "Metal Mug",
    price: 3,
    img: "https://m.media-amazon.com/images/I/61SJPoBcisL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Ladle",
    description: "Metal Ladle",
    price: 4,
    img: "https://m.media-amazon.com/images/I/61nM4lieuzL.jpg",
  },
  {
    name: "Glass",
    description: "Crystal Glass",
    price: 5,
    img: "https://api-prod.royaldesign.se/api/products/image/6/koziol-crystal-glass-l-0",
  },
];

function ProductCard({ product }) {
  // Colors used for Dropdown Menu
  // green/success used as default,
  // using State so only specific button impacted rather than all of them
  const [buttonColor, setButtonColor] = useState("success");
  const nav = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  function handlePurchase(price) {
    setTotalPrice(totalPrice + price);
    nav("/products", { state: totalPrice + price });
  }

  const handleDropdownColor = (colorChosen) => {
    setButtonColor(colorChosen);
  };

  return (
    <Card id="product-cards">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: £{product.price}</Card.Text>
        <Card.Img src={product.img} />
        <Dropdown>
          {/* button color depends on which dropdown menu item selected
          colors based on Bootstrap btn colors of success, danger and primary */}
          <Dropdown.Toggle variant={buttonColor} id="dropdown-basic">
            Dropdown button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              value="danger"
              onClick={() => handleDropdownColor("danger")}
              href="#/action-1"
            >
              Red
            </Dropdown.Item>
            <Dropdown.Item
              value="primary"
              href="#/action-2"
              onClick={() => handleDropdownColor("success")}
            >
              Green
            </Dropdown.Item>
            <Dropdown.Item
              value="success"
              href="#/action-3"
              onClick={() => handleDropdownColor("primary")}
            >
              Blue
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button
          onClick={() => handlePurchase({ ...product.price })}
          className="btn btn-info"
        >
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}

export default function Products() {
  const [totalPrice] = useState(0);

  return (
    <>
      <h1>Products</h1>
      <TotalPrice totalPrice={totalPrice} />
      <div className="card-container">
        {/* Loop through all producsts and put them inside cards 
        names are all unique so used as keys
        */}
        {products.map((product) => (
          <ProductCard
            totalPrice={totalPrice}
            key={product.name}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
