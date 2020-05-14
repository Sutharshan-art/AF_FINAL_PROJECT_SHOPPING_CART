import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import defaultimg from '../images/electronic.jpg'
import PropTypes from "prop-types";

function ProductDisplay({product}){
    const {name,slug,images,price} = product;

    return (
        <div className="logne">
            <article className="category">
                <div className="img-container">
                    <img src={images[0]  || defaultimg} alt="Product"/>
                    <div className="price-top">
                        <h6>{price}</h6>
                    </div>
                    <Link to={'/Phone/${slug}'} className="btn-primary room-link">View Details</Link>
                </div>
                <p className="category-info">{name}</p>
            </article>
        </div>
    );
}

ProductDisplay.propTypes = {
        product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
};
export default ProductDisplay;
