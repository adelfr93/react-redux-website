import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProduct } from '../redux/actions/ProductsActions';

const ProductDetails = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log('Err : ', err)
        })

        dispatch(selectProduct(response.data))
    }

    useEffect(() => {
        if(productId && productId != "") fetchProductDetail();
    },[productId]);

    return (<div>
        <h1 className='text-center'>Product detail</h1>
    </div>);
}

export default ProductDetails;