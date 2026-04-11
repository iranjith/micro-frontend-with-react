import React from "react";
import "./cart.css";
import { useCart } from "./CartContext";




export default function Cart() {
  const { items, addItem, removeItem, clearCart } = useCart();


  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item]) {
      groups[item] = 0;
    }
    groups[item]++;
    return groups;
  }, {});
  return (
    <div>
      This is the cart
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {Object.entries(groupedItems).map(([item, count] ) => (
            <li key={item} className="cart-item">
              {item}: {count}
              <button className="button" onClick={() => removeItem(item)}>Remove</button>
              <button className="button" onClick={() => addItem(item)}>Add One More</button>
              <button className="button" onClick={() => clearCart()}>Clear Cart</button> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
