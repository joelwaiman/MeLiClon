import React from "react";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Question from "./Question/Question";
import styles from './itemView.module.css'

const ItemView = ({ item }) => {

    return (
        <div className={styles.container}>
            <div className={styles.container_product}>
                <div className={styles.img_container}>
                    <img className={styles.image}
                        alt="product"
                        src={item.image} />
                </div>
                <div className={styles.info_container}>
                    <div>
                        <p className={styles.state}>Nuevo</p>
                        <h2 className={styles.title}>{item.title}</h2>
                    </div>
                    <p className={styles.price}>${item.price}</p>
                    <p className={styles.cuotas}>En 3 cuotas de ${(item.price / 3).toFixed(2)} </p>
                    <div className={styles.delivery}>
                        <AgricultureIcon />
                        <p>Llega cuando me contraten</p>
                    </div>
                    <h4>Stock Disponible</h4>
                    <button className={styles.button_buy}>Comprar ahora</button>
                    <button className={styles.button_add}>Agregar al carrito</button>
                </div>
            </div>
            <div className={styles.container_description}>
                <h2 className={styles.description}>Description</h2>
                <p className={styles.parr}>{item.description}</p>
            </div>
            <Question />
        </div>
    )
}

export default ItemView;