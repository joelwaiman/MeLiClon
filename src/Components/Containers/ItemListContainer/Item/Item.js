import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ item }) => {
    return (
        <Link to={`/products/${item.id}`} className="link">
            <div className="container-home">
                <img className="img-home" alt={'products'} src={item.image} />
                <div className="info">
                    <p className="title-home">{item.title}</p>
                    <p className="price-home">$ {item.price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item