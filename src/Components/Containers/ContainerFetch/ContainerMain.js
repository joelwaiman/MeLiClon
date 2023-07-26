import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../CustomContext";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Skeleton } from "@mui/material";

const ContainerMain = () => {

  const { products, loading, setLoading, setProducts } = useContext(Context)
  const { id } = useParams()

  const URL_BASE = 'https://fakestoreapi.com/products';
  const URL_CAT = `${URL_BASE}/category/${id}`;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(id ? URL_CAT : URL_BASE);
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      }
      finally {
        setLoading(false)
      }
    };
    getProducts();
  }, [id, URL_CAT, URL_BASE]);

  return (
    <div>
      {loading ? (
        <Skeleton sx={{ margin: 'auto', opacity: 0.7}} width="100vw" height="100vh" animation="wave" variant="rectangular" />
      ) : 
      <ItemListContainer products={products} />}
    </div>
  )
}

export default ContainerMain;