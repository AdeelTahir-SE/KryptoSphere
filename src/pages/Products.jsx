import React, { useState } from "react";
import ShirtCard from "../components/ShirtCard";
import blackshirt from "../assets/blackshirt2.jpg";
import blueshirt from "../assets/blueshirt2.jpg";
import "./Products.css"

export default function Products() {
    // Initial products array
    const initialProducts = [
        { src: blackshirt },
        { src: blueshirt }
    ];

    // Function to repeat products
    const repeatProducts = (products, times) => {
        const repeated = [];
        for (let i = 0; i < times; i++) {
            repeated.push(...products);
        }
        return repeated;
    };

    // Set the number of times to repeat the products
    const repeatedProducts = repeatProducts(initialProducts, 100); // Adjust the number to repeat as needed

    return (
        <div className="products">
            <h1>PRODUCTS</h1>
            <p>
                We have two colors for this collection. You can either conquer the day
                with blue or go classic with black this summer. All items are carefully
                hand-tailored by Krypt. Each variation is uniquely tagged and identifiable by its number.
            </p>
            <div className="cardscontainer">
                <ul>
                    {repeatedProducts &&
                        repeatedProducts.map((product, i) => (
                            <li key={i}>
                                <ShirtCard src={product.src} number={(i + 1).toString().padStart(3, '0')}  addtocart={1} preview={1}/>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}
