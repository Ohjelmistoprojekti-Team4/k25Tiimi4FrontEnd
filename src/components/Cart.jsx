import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/Shop-context';
import { CartItem } from './Cart-item';
import { useNavigate } from 'react-router-dom';
import "./Cart.css";

function Cart() {
    const { cartItems, getTotalPrice } = useContext(ShopContext);
    const totalPrice = getTotalPrice();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    
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
                // setCartItems(getDefaultCart(data));
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h2>Loading cart...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    const cartProducts = products.filter(p => cartItems[p.productId] > 0);

    return (
        <div className="cart">
        <h1>Your Cart Items</h1>
        <div className="cartItems">
            {cartProducts.length === 0 ? (
                <>
                    <h2>Your cart is empty.</h2>
                    <div className="checkout">
                        <button  onClick={() => navigate("/products")}>Back to Shopping</button>
                    </div>
                </>
            ) : (
                cartProducts.map((product) => (
                    <CartItem key={product.productId} data={product} />
                ))
            )}
        </div>

        {cartProducts.length > 0 && (
            <div className="checkout">
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <button onClick={() => navigate("/products")}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
        )}
    </div>
        
    );
}


export default Cart;