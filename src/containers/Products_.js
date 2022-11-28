import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/ProductsActions';
import Product from "./Product";

const Products = () => {
    const products = useSelector((state) => state.reducers.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err);
        })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    //console.log("Products : ", products);
    return (
        <>
            <div className='col-md-12 mb-3 text-center'><h1>List of products</h1></div>
            <div className='container'><div className='row mt-5'><Product /></div></div>
        </>
    );
}

export default Products;