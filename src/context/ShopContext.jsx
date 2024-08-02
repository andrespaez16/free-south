import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const [cartItems, setCartItems] = useState([]);

    const getProductsByCategory = async ({ categoryId = 1, page = 1, size = 10, search = '' }) => {
        const queryParams = new URLSearchParams();
        if (search && (typeof search === 'string')) {
            queryParams.set('search', encodeURIComponent(search));
        }
        queryParams.set('categoryId', Number.isNaN(+categoryId) ? 1 : +categoryId);
        queryParams.set('page', Number.isNaN(+page) ? 1 : +page);
        queryParams.set('size', Number.isNaN(+size) ? 10 : +size);
        const uri = `${backendUrl}/api/products?${queryParams.toString()}`;

        return new Promise((resolve, reject) => {
            fetch(new Request(uri), {
                method: 'GET',
                mode: 'cors',
            })
                .then(async (response) => resolve(await response.json()))
                .catch((error) => reject(error));
        })
    }
    const getProductDetails = async (productId) => {
        const uri = `${backendUrl}/api/product/${+productId}`;
        return new Promise((resolve, reject) => {
            fetch(new Request(uri), {
                method: 'GET',
                mode: 'cors',
            })
                .then(async (response) => resolve(await response.json()))
                .catch((error) => reject(error));
        })
    }

    const getProductImageLink = (image) => `${backendUrl}/products/${image}.jpg`;

    const addToCart = (item) => setCartItems((prev) => [...prev, item]);

    const removeFromCart = (productId) => setCartItems((prev) => prev.filter((p) => +p.id === +productId))

    const getTotalCartAmount = () => cartItems.reduce((p, c) => (+p.price) + (+c.price), 0);

    const getTotalCartItems = () => cartItems.length;

    const getShoppingCart = () => cartItems;

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        getProductsByCategory,
        getProductDetails,
        getProductImageLink,
        getShoppingCart,
        addToCart,
        removeFromCart,
    };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;