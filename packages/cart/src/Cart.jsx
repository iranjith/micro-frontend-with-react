import React from "react";
import "./cart.css";


function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload].sort() };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.payload.id).sort() };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
}


export default function Cart() {
  const [cartItems, dispatch] = React.useReducer(cartReducer, { items: ["Laptop", "Mouse"] });

  const groupedItems = cartItems.items.reduce((groups, item) => {
    if (!groups[item]) {
      groups[item] = 0;
    }
    groups[item]++;
    return groups;
  }, {});
  return (
    <div>
      This is the cart
      {cartItems.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {Object.entries(groupedItems).map(([item, count] ) => (
            <li key={item} className="cart-item">
              {item}: {count}
              <button className="button" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: { id: item } })}>Remove</button>
              <button className="button" onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}>Add One More</button>
              <button className="button" onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
