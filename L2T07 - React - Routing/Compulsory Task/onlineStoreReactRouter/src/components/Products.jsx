import TotalPrice from "./TotalPrice";
import ProductCard from "./ProductCard";
import { useState } from "react";

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

export default function Products() {
  const [totalPrice, setTotalPrice] = useState(0);

  // Update total price
  const updateTotalPrice = (price) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <>
      <h1>Products</h1>
      <hr />
      <TotalPrice totalPrice={totalPrice} />
      <div className="card-container">
        {/* Loop through all products and put them inside cards 
          names are all unique so used as keys
          */}
        {products.map((product) => (
          <ProductCard
            totalPrice={totalPrice}
            key={product.name}
            product={product}
            updateTotalPrice={updateTotalPrice}
          />
        ))}
      </div>
    </>
  );
}
