import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <Link to={`/products/${item.id}`} style={style.link}>
            <div style={style.container}>
                <img style={style.img} alt={'products'} src={item.image} />
                <div style={style.info}>
                    <p style={style.title}>{item.title}</p>
                    <p style={style.price}>$ {item.price}</p>
                </div>
            </div>
        </Link>
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
    img: {
        maxWidth: '6rem',
        padding: '0 1rem'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        height: 100,
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 22
    },
    price: {
        fontSize: '1.5rem',
        padding: '14px 0'
    },
    link: {
        textDecoration: 'none'
    }
}