import React from 'react';
import {Routes , Route , Navigate} from "react-router-dom";

//Component
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShoppingCart from './components/ShoppingCart';


//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';



function App () {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Navbar />
                <Routes>
                    <Route path ="/products/:id" element = {<ProductDetails />} />
                    <Route path ="/products" element = {<Store />} />
                    <Route path ="/cart" element = {<ShoppingCart />} />
                    <Route path="/*" element = {<Navigate to="/products" />} />
                </Routes>
            </CartContextProvider>
        </ProductContextProvider>
    );
};

export default App;