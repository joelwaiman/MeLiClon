import React, {useEffect, useState} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ContainerMain = ()=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getProducts = async () => {
            try {
              const res = await fetch('https://fakestoreapi.com/products');
              const data = await res.json();
              setProducts(data);
            } catch {
              console.log("error");
            }
          };
          getProducts();
    }, []);
    
    return(
        <div>
            <ItemListContainer products={products}/>
        </div>
    )
}

export default ContainerMain;