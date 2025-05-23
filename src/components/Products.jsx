import React, { useContext, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import './Products.css';
import Footer from './Footer';
import { ShopContext } from '../context/Shop-context'; 

export default function Products() {
    const [products, setProducts] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [selectedManufacturer, setSelectedManufacturer] = useState("ALL");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart, cartItems } = useContext(ShopContext);

    // Fetchataan products lokaalisti
    useEffect(() => {
        fetch('https://k25-tiimi4-op1.2.rahtiapp.fi/api/products')
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
        fetch('https://k25-tiimi4-op1.2.rahtiapp.fi/api/manufacturers')
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
        <>
            <div className="products-page">
                <Typography variant="h1" sx={{ mb: 5 }}>Our Products</Typography>

                <div className="filter-container" style={{ display: 'flex' }}>
                    <label htmlFor="manufacturerFilter">
                        <Typography variant="h3" sx={{ mr: 1 }}>Filter by Manufacturer:</Typography>
                    </label>
                    <select
                        style={{ padding: 2 }}
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

                <Grid container spacing={5} className="product-list">
                    {filteredProducts.map((product) => {
                        const cartItemAmount = cartItems[product.productId] || 0;

                        return(
                        <Grid key={product.productId} className="product-card">
                            <div className="product-header">
                                <Typography variant="h3" component="h4">{product.name}</Typography>
                                <span className="price">${product.price}</span>
                            </div>
                            
                            <p><strong>Type:</strong> {product.type}</p>
                            {product.manufacturer && (
                                <p><strong>Manufacturer:</strong> {product.manufacturer.name}</p>
                            )}
                            {product.color && <p><strong>Color:</strong> {product.color}</p>}
                            {product.size && <p><strong>Size:</strong> {product.size}</p>}
                            {product.material && <p><strong>Material:</strong> {product.material}</p>}
                            {product.flavor && <p><strong>Flavor:</strong> {product.flavor}</p>}
                            <button className="addToCartBttn" onClick={() => addToCart(product.productId)}>
                                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                                </button>
                        </Grid>
                        );                    
                    })}
                </Grid>
            </div>
            <Footer />
        </>
    );
}