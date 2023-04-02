import React, { createContext, useState } from "react";

export const Context = createContext();

export const CustomProvide = ({ children }) => {

  const [item, setItem] = useState({});
  const [load, setLoad] = useState(true);
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <Context.Provider value={{ products, loading, item, load, setLoad, setItem, setProducts, setLoading }}>
        {children}
    </Context.Provider>
  )
}