import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemView from "../ItemDetail/ItemView";
import { Skeleton } from "@mui/material";
import { Context } from "../../../CustomContext";

const ItemDetail = () => {
    const {setItem, setLoad, item, load} = useContext(Context)
    const { idItem } = useParams();

    const URL_PRODUCT = `https://fakestoreapi.com/products/${idItem}`;

    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await fetch(URL_PRODUCT);
            const data = await res.json();
            setItem(data);
          } catch {
            console.log("error");
          }
          finally {
            setLoad(false)
          }
        };
        getProducts();
      }, [URL_PRODUCT]);
      
    return (
        <>
            {load ? (
                <Skeleton sx={{ margin: 'auto', opacity: 0.7 }} width="100vw" height="100vh" animation="wave" variant="rectangular" />
            ) :(
            <ItemView item={item} />
            )};
        </>
    )
}

export default ItemDetail;