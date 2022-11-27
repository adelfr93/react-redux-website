import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Product = () => {
    const products = useSelector((state) => state.reducers.allProducts.products);
    //const { id, title } = products[0];
    //console.log(products);

    const renderProducts = () => {
        products.map(product => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                        <Link to={'/product/' + product.id}>{product.title}</Link>
                    </td>
                    <td>{product.category}</td>
                </tr>)
        }
        )
    }


    return (<table className='table table-striped'>
        <thead className="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
            </tr>
        </thead>
        <tbody>
            {renderProducts}
        </tbody></table >);
}

export default Product;