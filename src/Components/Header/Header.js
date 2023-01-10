import React from "react"
import { NavLink, Link } from "react-router-dom"
import mlpng from '../../Assets/mlpng.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

    const categorys = [
        { name: 'Moda', id: 0 },
        { name: 'Electronica', id: 1 },
        { name: 'Deporte', id: 2 }
    ]

    return (
        <header style={styles.header}>
            <div style={styles.container1}>
                <img style={styles.img} src={mlpng} />
                <input placeholder="Que estas buscando?" style={styles.input} />
                <button style={styles.button}>
                    <SearchIcon/>
                </button>
            </div>
            <div style={styles.container2}>
                <div style={styles.location}>
                   <LocationOnIcon />
                   <p>Enviar a Konoha</p>
                </div>
                <nav>
                    {categorys.map((category) => {
                        return <NavLink  style={styles.categorys} key={category.id}>{category.name}</NavLink>
                    })}
                </nav>
                <ShoppingCartIcon />
            </div>
        </header>
    )
}

export default Header;

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff159',
        fontFamily: 'roboto'
    },
    container1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 950,
        margin: 'auto'
    },
    img: {
        maxWidth: '2.5rem',
        margin: '0 50px 0 0'
    },
    input: {
        margin: '10px -5px 2px 0',
        padding: '0 5px',
        width: 600,
        height: 40,
        backgroundColor: '#FFFFFF',
        border: 'transparent',
        borderRadius: 5
    },
    button: {
        display: 'flex',
        width: 46,
        height: 39,
        margin: '10px 0 2px 0',
        backgroundColor: '#FFFFFF',
        padding: '20px 5px',
        border: 'transparent',
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
        color: '#adadad'
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        maxWidth: 950,
        margin: '10px 0 10px 375px',
        color: '#3339'
    },
    location:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    categorys:{
        textDecoration: 'none',
        color: '#3339',
        margin: '0 10px'
    },
}