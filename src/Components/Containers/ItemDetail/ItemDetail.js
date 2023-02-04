import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { Skeleton } from "@mui/material";

const ItemDetail = () => {
    const { product, setProduct } = useState({})
    const { loading, setLoading } = useState(true)
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                const info = await res.json();
                setProduct(info)
            }
            catch {
                console.log('Error');
            }
            finally {
                setLoading(false)
            }
        }
        getProduct()
    }, [id])

    return (
        <>
            {loading ? (
                <Skeleton sx={{ margin: 'auto', opacity: 0.7 }} width="100vw" height="100vh" animation="wave" variant="rectangular" />
            ) :
                <Item product={product} />}
        </>
    )
}

export default ItemDetail;