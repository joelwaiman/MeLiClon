import React from "react";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Question from "./Question/Question";
import './itemView.css'

const ItemView = ({ item }) => {

    return (
        <div className="container-main-detail">
            <div className="container-detail-info">
                <div className="img-container">
                    <img className="img-detail" alt="product" src={item.image} />
                </div>
                <div className="detail-container-detail">
                    <div>
                        <p className="state-detail">Nuevo</p>
                        <h2 className="title-detail">{item.title}</h2>
                    </div>
                    <p className="price-detail">${item.price}</p>
                    <p className="coutas-detail">En 3 cuotas de ${(item.price / 3).toFixed(2)} </p>
                    <div className="delivery-detail">
                        <AgricultureIcon />
                        <p>Llega cuando me contraten</p>
                    </div>
                    <h4>Stock Disponible</h4>
                    <button className="buttonBuy-detail">Agregar al carrito</button>
                </div>
            </div>
            <div className="containerDescription">
                <h2 className="description">Description</h2>
                <p className="parr">{item.description}</p>
            </div>
            <Question/>
        </div>
    )
}

export default ItemView;