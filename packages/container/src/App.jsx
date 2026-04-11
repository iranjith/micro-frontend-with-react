import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/*" element={<RemoteProducts />} />
        <Route path="/cart" element={<RemoteCart />} />
      </Routes>
    </BrowserRouter>

  );
}

function HomePage() {
  return <div>Welcome to our micro-frontend store!</div>;
}

function RemoteProducts() {
  const ProductList = React.lazy(() => import("products/Products"));
  return (
    <React.Suspense fallback="Loading products...">
      <ProductList />
    </React.Suspense>
  );
}

function RemoteCart() {
  const Cart = React.lazy(() => import("cart/Cart"));
  return (
    <React.Suspense fallback="Loading cart...">
      <Cart />
    </React.Suspense>
  );
}
