import React from "react";
import {useParams} from "react-router-dom";

export default function ProductDetail() {
    const {id} = useParams();
    return (
        <div>
            <h2>Product Detail</h2>
            <p>This is the product detail for product with id: {id}</p>
        </div>
    )
}