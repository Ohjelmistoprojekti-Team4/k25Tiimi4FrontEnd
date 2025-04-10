import React, { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/products') 
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h3 style={{ display: "grid", placeItems: "center", fontFamily: "Arial, sans-serif", color: "#5C4033" }}>Loading...</h3>;
    }

    if (error) {
        return <h3 style={{ display: "grid", placeItems: "center", color: "red", fontFamily: "Arial, sans-serif" }}>Error: {error}</h3>;
    }

 
    const filteredProducts = products.filter(
        (product) => product.type === "TOY" || product.type === "CLOTHING"
    );

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", color: "#333" }}>
            <h1 style={{ textAlign: "center", color: "#5C4033" }}>Our Products</h1>
            <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {filteredProducts.map((product) => (
                    <li key={product.productId} style={{
                        margin: "20px",
                        padding: "20px",
                        backgroundColor: "#d2b48c",
                        borderRadius: "10px",
                        width: "300px",
                        border: "2px solid #5C4033",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                    }}>
                        <h4 style={{ color: "#5C4033", textAlign: "center" }}>{product.name}</h4>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Type:</strong> {product.type}</p>
                        {product.manufacturer && (
                            <p><strong>Manufacturer:</strong> {product.manufacturer.name}</p>
                        )}
                        <p><strong>Color:</strong> {product.color}</p>
                        <p><strong>Size:</strong> {product.size}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}