import React, { useContext, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import mlpng from '../../Assets/mlpng.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Context } from "../../CustomContext";
import './header.css'

const Header = () => {

    const { products, setProducts } = useContext(Context)

    const [inputValue, setInputValue] = useState('')

    const categorys = [
        { title: "Electronics", id: 0, route: "/category/electronics" },
        { title: "Jewelery", id: 1, route: "/category/jewelery" },
        { title: "Men", id: 2, route: "/category/men's clothing" },
        { title: "Women", id: 3, route: "/category/women's clothing" }
    ]

    const catchInput = (e) => {
        const { value } = e.target;
        setInputValue(value)
    }

    const search = () => {
        const inputToUpperCase = inputValue.toUpperCase();
        const results = products.filter(item => item.title.toUpperCase().includes(inputToUpperCase));
        setProducts(results);
    }

    const reset = () => {
        window.location = "/"
    }

    return (
        <header className="header">
            <div className='containerInput'>
                <Link to="/" onClick={reset}>
                    <img className="imgLogo" alt={"logo"} src={mlpng} />
                </Link>
                <input value={inputValue} onChange={catchInput} placeholder="Que estas buscando?" className="input" />
                <button className="button" onClick={search} disabled={inputValue === ''} >
                    <SearchIcon />
                </button>
            </div>
            <div className="containerCategory">
                <div className="location">
                    <LocationOnIcon />
                    <p>Enviar a Konoha</p>
                </div>
                <nav>
                    {categorys.map((category) => {
                        return <NavLink className='categories' key={category.id} to={category.route}>{category.title}</NavLink>
                    })}
                </nav>
                <ShoppingCartIcon />
            </div>
        </header>
    )
}

export default Header;