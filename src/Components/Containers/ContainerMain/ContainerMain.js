import React, {useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../CustomContext";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ContainerMain = ()=>{

  const {products, loading, setLoading, setProducts} = useContext(Context)
  const { id } = useParams()
  console.log(id);

  const URL_BASE = 'https://fakestoreapi.com/products';
  const URL_CAT = `${URL_BASE}/category/${id}`;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(id? URL_CAT : URL_BASE);
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
  
    return(
        <div>
          {loading? <h2>Cargando...</h2> : <ItemListContainer products={products}/>}
            
        </div>
    )
}

export default ContainerMain;