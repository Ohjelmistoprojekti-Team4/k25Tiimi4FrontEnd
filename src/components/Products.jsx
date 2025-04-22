import React, { useEffect, useState } from 'react';
import './Products.css';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [selectedManufacturer, setSelectedManufacturer] = useState("ALL");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Fetchataan products lokaalisti
    useEffect(() => {
        fetch('https://localhost:8080/api/products')
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

    // Fetchataan manufacturers lokaalisti
    useEffect(() => {
        fetch('https://localhost:8080/api/manufacturers')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setManufacturers(data);
            })
            .catch((error) => {
                console.error("Error fetching manufacturers:", error);
            });
    }, []);

    if (loading) {
        return <h3 className="loading-text">Loading...</h3>;
    }

    if (error) {
        return <h3 className="error-text">Error: {error}</h3>;
    }

    const filteredProducts = products.filter((product) => {
        if (selectedManufacturer === "ALL") return true;
        return product.manufacturer && product.manufacturer.name === selectedManufacturer;
    });

    return (
        <div className="products-page">
            <h1>Our Products</h1>

            <div className="filter-container">
                <label htmlFor="manufacturerFilter">
                    Filter by Manufacturer:
                </label>
                <select
                    id="manufacturerFilter"
                    value={selectedManufacturer}
                    onChange={(e) => setSelectedManufacturer(e.target.value)}
                >
                    <option value="ALL">All</option>
                    {manufacturers.map((manufacturer) => (
                        <option key={manufacturer.manufacturerId} value={manufacturer.name}>
                            {manufacturer.name}
                        </option>
                    ))}
                </select>
            </div>

            <ul className="product-list">
                {filteredProducts.map((product) => (
                    <li key={product.productId} className="product-card">
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