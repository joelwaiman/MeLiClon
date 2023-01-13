import React from "react";
import Item from "./Item";

const ItemListContainer = ({pokemons})=>{

    return(
        <div style={styles.background}>
            {pokemons.map((poki)=>{
                return <Item key={poki.id} pokemons={poki} />
            })}
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