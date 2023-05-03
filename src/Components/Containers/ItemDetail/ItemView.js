import React from "react";
import AgricultureIcon from '@mui/icons-material/Agriculture';

const ItemView = ({ item }) => {

    return (
        <div style={styles.containerMain}>
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
                    <p>En 3 cuotas de ${(item.price / 3).toFixed(2)} </p>
                    <div style={styles.delivery}>
                        <AgricultureIcon style={styles.icon} />
                        <p>Llega cuando me contraten</p>
                    </div>
                    <h4>Stock Disponible</h4>
                    <button style={styles.button}>Agregar al carrito</button>
                </div>
            </div>
            <div style={styles.containerDescription}>
                <h2 style={styles.description}>Description</h2>
                <p style={styles.parr}>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemView;

const styles = {
    containerMain: {
        backgroundColor: 'white',
        width: '75vw',
        height: '90%',
        margin: 'auto',
        marginTop: 100,
        borderRadius: 2,
        boxShadow: '1px 1px 5px #D8D8D8'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
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
    imgSection: {
        borderBottom: '1px solid #e6e6e6',
        margin: '5rem 3.5rem',
        padding: '0 0 0 10rem'
    },
    img: {
        maxWidth: '50%',
        maxHeight: '50%',
    },
    state: {
        color: '#0000008c'
    },
    price: {
        fontSize: 36,
        padding: '25px 0 0 0'
    },
    delivery: {
        display: 'flex',
        margin: '3rem 0 3rem 0',
    },
    icon: {
        margin: '0 10px 0 0'
    },
    button: {
        backgroundColor: '#3483fa',
        color: '#FFFFFF',
        fontSize: '17px',
        margin: '5px 0 0',
        width: '22rem',
        height: '3rem',
        padding: '0 5px',
        borderStyle: 'none',
        borderRadius: 5
    },
    containerDescription:{
        maxWidth: '60%',
        margin: '0 3.5rem',
        padding: '0 0 3rem 0'
    },
    description:{
        padding: '0 0 1.5rem 0',
        fontWeight: '300'
    },
    parr:{
        color:'#666',
        fontSize: 20,
        fontWeight: '300',
        letterSpacing: 1
    }
}