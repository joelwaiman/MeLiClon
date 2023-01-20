import React, {useContext} from "react";
import { Context } from "../../../CustomContext";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ContainerMain = ()=>{

  const {products, loading} = useContext(Context)
  
    return(
        <div>
          {loading? <h2>Cargando...</h2> : <ItemListContainer products={products}/>}
            
        </div>
    )
}

export default ContainerMain;