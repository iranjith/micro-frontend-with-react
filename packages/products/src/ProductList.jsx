import React, {useState} from "react";
import "./products.css";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
    {id: 1, name: "Product 1", price: 10},
    {id: 2, name: "Product 2", price: 20},
    {id: 3, name: "Product 3", price: 30},
];

export default function ProductList() {
  const [products] = useState(DUMMY_PRODUCTS);

  return (
    <div>
      <h2>Product List</h2>
      
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
          <div className="product-item">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>

          <div className="product-actions">
            <Link to={`/${product.id}`}>View Details</Link>
            <button className="button" onClick={()=>alert('Add to cart')}>Add to Cart</button>
          </div>  
          </div>
        ))}
      </div>
    </div>
  );
}
