import React from "react"
import { NavLink, Link } from "react-router-dom"
import mlpng from '../../Assets/mlpng.png'

const Header = () => {

    const categorys = [
        { name: 1, id: 0 },
        { name: 2, id: 1 },
        { name: 3, id: 2 }
    ]

    return (
        <header style={styles.header}>
            <div style={styles.container1}>
                <img style={styles.img} src={mlpng} />
                <input style={styles.input} />
                <button style={styles.button} />
            </div>
            <nav style={styles.container2}>
                {categorys.map((category) => {
                    return <NavLink key={category.id}>{category.name}</NavLink>
                })}
            </nav>
        </header>
    )
}

export default Header;

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff159'
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
        width: 600,
        height: 40,
        backgroundColor: '#FFFFFF',
        border: 'transparent',
        borderRadius: 5
    },
    button: {
        width: 46,
        height: 39,
        margin: '10px 0 2px 0',
        backgroundColor: '#FFFFFF',
        padding: '20px 5px',
        border: 'transparent',
        borderRadius: 5
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 950,
        margin: 'auto'
    },
}