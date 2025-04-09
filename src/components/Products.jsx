import React, { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/products') // Use the unified /api/products endpoint
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
        return <h3 style={{ display: "grid", placeItems: "center" }}>Loading...</h3>;
    }

    if (error) {
        return <h3 style={{ display: "grid", placeItems: "center", color: "red" }}>Error: {error}</h3>;
    }

    // Filter products to include both TOY and CLOTHING types
    const filteredProducts = products.filter(
        (product) => product.type === "TOY" || product.type === "CLOTHING"
    );

    return (
        <div style={{ padding: "20px" }}>
            <h3 style={{ textAlign: "center" }}>Products</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {filteredProducts.map((product) => (
                    <li key={product.productId} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                        <h4>{product.name}</h4>
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