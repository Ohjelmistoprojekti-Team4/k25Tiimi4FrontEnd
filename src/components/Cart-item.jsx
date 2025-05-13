import React, { useContext } from 'react';
import { ShopContext } from '../context/Shop-context';

export const CartItem = ({ data }) => {
    const { productId, name, price } = data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    const quantity = cartItems[productId] || 0;

    return (
        <div className="cartItem">
            <div>
                <h3>{name}</h3>
                <p>Price: ${price.toFixed(2)}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div className="buttons">
                <button onClick={() => removeFromCart(productId)} style={{fontSize: '15px'}}>-</button>
                <button onClick={() => addToCart(productId)} style={{fontSize: '15px'}}>+</button>
            </div>
        </div>
    );
};