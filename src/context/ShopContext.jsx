import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

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
    
    const calculate = (items) => {
        setTotalCartItems(items
            .map((item) => item.quantity)
            .reduce((p, c) => p + c, 0));
        setTotalAmount(items
            .map((item) => item.paid)
            .reduce((p, c) => p + c, 0))
    }

    const addToCart = (item) => {
        const index = cartItems.findIndex((_item) => _item.id === item.id);
        if (index === -1) {
            let items = cartItems;
            items.push({
                ...item,
                quantity: 1,
                paid: item.price * 1
            });

            return calculate(items);
        }
        let items = cartItems;
        item = items[index];
        items[index] = {
            ...item,
            quantity: item.quantity + 1,
            paid: item.price * (item.quantity + 1)
        }
        setCartItems(items);

        return calculate(items);
    };

    const removeFromCart = (productId) => {
        let items = cartItems.filter((p) => +p.id !== +productId);
        setCartItems(items);
        
        return calculate(items);
    }

    const getTotalCartAmount = () => totalAmount;

    const getTotalCartItems = () => totalCartItems;

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