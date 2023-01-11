import React from "react";

const ItemListContainer = ()=>{

    return(
        <div style={styles.background}>
            <h1>Hola Mundo</h1>
        </div>
    )
}

export default ItemListContainer;

const styles = {
    background:{
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        maxWidth: 744,
        height: '90vh',
        margin: '15px auto'
    }
}