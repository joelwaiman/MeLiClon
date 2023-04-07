import React from "react";
import AgricultureIcon from '@mui/icons-material/Agriculture';

const ItemView = ({ item }) => {
    return (
        <div style={styles.container}>
            <div style={styles.imgSection}>
                <img style={styles.img} alt="product" src={item.image} />
            </div>
            <div style={styles.detailSeccion}>
                <div>
                    <p style={styles.state}>Nuevo</p>
                    <h2>{item.title}</h2>
                </div>
                <p style={styles.price}>${item.price}</p>
                <p>En 3 cuotas de ${item.price / 3} pagando con laburo</p>
                <div style={styles.delivery}>
                    <AgricultureIcon style={styles.icon}/>
                    <p>Llega cuando me contraten</p>
                </div>
                <h4>Stock Disponible</h4>
            </div>
        </div>
    )
}

export default ItemView;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '75vw',
        height: '90vh',
        margin: 'auto',
        marginTop: 100,
        borderRadius: 2,
        boxShadow: '1px 1px 5px #D8D8D8'
    },
    detailSeccion: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxWidth: 350,
        margin: '4rem 1rem',
        padding: 16,
        border: 'solid 1px #D8D8D8',
        borderRadius: 5
    },
    img: {
        maxWidth: '50%',
        maxHeight: '50%',
        margin: '5rem 3.5rem',
        padding: '0 0 0 10rem'
    },
    state:{
        color: '#0000008c'
    },
    price: {
        fontSize: 36,
        padding: '25px 0 0 0'
    },
    delivery:{
        display: 'flex',
        margin: '3rem 0 3rem 0',
    },
    icon:{
        margin: '0 10px 0 0'
    }
}