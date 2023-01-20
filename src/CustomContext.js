import React, { createContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export const Context = createContext();

export const CustomProvide = ({children}) => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    console.log(id);

    const URL_BASE = 'https://fakestoreapi.com/products'
    const URL_CAT = `${URL_BASE}/category/${id}`

    useEffect(()=>{
        const getProducts = async () => {
            try {
              const res = await fetch(id? URL_CAT : URL_BASE);
              const data = await res.json();
              setProducts(data);
            } catch {
              console.log("error");
            }
            finally{
                setLoading(false)
            }
          };
          getProducts();
    }, [URL_BASE]);

    return (
        <Context.Provider value={{products, loading, id}}>
            {children}
        </Context.Provider>
    )
}