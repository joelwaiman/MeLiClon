import React, {useEffect, useState} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ContainerMain = ()=>{
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        const getProducts = async () => {
            try {
              const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
              const data = await res.json();
              const poke = data.map(item => {
                return {...item}
              });
              console.log(poke);
              setPokemons(poke);
            } catch {
              console.log("error");
            }
          };
          getProducts();
    });
    
    return(
        <div>
            <ItemListContainer pokemons={pokemons} />
        </div>
    )
}

export default ContainerMain;