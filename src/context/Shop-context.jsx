import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
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
                setCartItems(getDefaultCart(data));
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const getDefaultCart = (products) => {
        let cart = {}
        products.forEach(product => {
            cart[product.productId] = 0;
        });
        return cart;
    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        for (const itemId in cartItems) {
            const quantity = cartItems[itemId];
            if (quantity > 0) {
                const product = products.find(p => p.productId === parseInt(itemId));
                if (product) {
                    totalPrice += quantity * product.price;
                }
            }
        }
        return totalPrice;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const clearCart = () => {
        if (products.length > 0) {
            setCartItems(getDefaultCart(products));
        } else {
            setCartItems({});
        }
    }

    const contextValue = {
        products,
        loading,
        error,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalPrice,
        clearCart,
    };

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}



