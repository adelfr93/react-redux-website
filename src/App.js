import React from 'react';
import Header from './containers/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './containers/Products';
import ProductDetails from './containers/ProductDetails';
import Home from './containers/Home';

const App = () => {
    return (<div className='container-fluid'>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route>404 not found</Route>
            </Routes>
        </Router>
    </div>);
}

export default App;