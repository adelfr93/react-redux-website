import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Product = () => {
    const products = useSelector((state) => state.reducers.allProducts.products);
    //console.log(products);

    const renderProducts = products.map((product) => {
        const { id, title, image, description } = product;
        return (<div className="col-lg-3 col-md-4 col-sm-6 card mb-3" key={id}>
                <img className="card-img-top" src={image} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.substring(0,50)}</p>
                    <Link className="btn btn-primary" to={'/product/' + id}>Voir plus</Link>
                </div>
                </div>);

    });


    return <>
    {renderProducts}
    </>;
}

export default Product;