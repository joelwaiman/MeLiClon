import React from "react";

const ItemView = ({ item }) => {
    return(
        <div style={styles.container}>
        <h1>{item.price}</h1>
        </div>
    )
}

export default ItemView;

const styles = {
    container:{
        backgroundColor: 'white',
        width: '75vw',
        height: '90vh',
        margin: 'auto',
        marginTop: 100,
        borderRadius: 2,
        boxShadow: '1px 1px 5px #D8D8D8'
    }
}