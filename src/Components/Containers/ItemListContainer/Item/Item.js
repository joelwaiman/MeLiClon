import React from "react";
import { Link } from "react-router-dom";
import styles from './Item.module.css'

const Item = ({ item }) => {
    return (
        <Link to={`/products/${item.id}`} className={styles.link}>
            <div className={styles.container_home}>
                <img className={styles.img_home}
                    alt={'products'}
                    src={item.image} />
                <div className={styles.info}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.price}>$ {item.price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item