import React from "react";
import Item from "./Item/Item";
import './itemListContainer.css'

const ItemListContainer = ({ products }) => {
    return (
        <div className="background">
            {products.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}

export default ItemListContainer;
