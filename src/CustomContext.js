import React, { createContext, useState } from "react";

export const Context = createContext();

export const CustomProvide = ({ children }) => {


  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <Context.Provider value={{ products, loading, setProducts, setLoading }}>
        {children}
    </Context.Provider>
  )
}