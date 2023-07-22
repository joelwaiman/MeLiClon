import React, { useState } from "react";

const Question = () => {

    const [input, setInput] = useState('')
    const [question, setQuestion] = useState([])

    const handlerToAdd = (e) => {
        const { value } = e.target;
        setInput(value)
    }

    return (
        <div>
            <h2>Preguntale al vendedor</h2>
            <>
                <input value={input} onChange={handlerToAdd} placeholder="Escribí tu pregunta" />
                <button>Preguntar</button>
            </>
        </div>
    )
}

export default Question;