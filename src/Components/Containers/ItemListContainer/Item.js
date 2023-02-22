import React from "react";

const Item = ({ item }) => {
    return(
        <div style={style.container}>
        <img style={style.img} alt={'products'} src={item.image} />
        <div style={style.info}>
            <h3 style={style.title}>{item.title}</h3>
            <p style={style.price}>$ {item.price}</p>
        </div>
        </div>
        
    )
}

export default Item

const style = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '1.5rem',
        borderBottom: 'solid 0.5px #f0f0f0'
    },
    img:{
        maxWidth: '6rem',
        padding: '0 1rem'
    },
    info:{
        display: 'flex',
        flexDirection:'column',
        height: 100,
    },
    title:{
        fontFamily: 'Roboto'
    },
    price:{
        fontSize: '1.5rem'
    }
}