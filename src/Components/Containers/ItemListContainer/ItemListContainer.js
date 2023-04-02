import React from "react";
import Item from "./Item";

const ItemListContainer = ({ products }) => {
    return (
        <div style={styles.background}>
            {products.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}

export default ItemListContainer;

const styles = {
    background: {
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        maxWidth: 744,
        height: '90%',
        margin: '15px auto'
    },
}