import React, { useState } from "react";

const Question = () => {

    const [input, setInput] = useState('')
    const [question, setQuestion] = useState([])

    const handlerToAdd = (e) => {
        const { value } = e.target;
        setInput(value)
    }

    const addQuestion = () => {
        const newQuestion = ([input, ...question])
        setQuestion(newQuestion)
        setInput('')
    }

    return (
        <div style={style.container}>
            <h2 style={style.title}>Preguntale al vendedor</h2>
            <div style={style.containerInput}>
                <input style={style.input} value={input} onChange={handlerToAdd} placeholder="Escribí tu pregunta" />
                <button disabled={input === ''} style={style.button} onClick={addQuestion}>Preguntar</button>
            </div>
            <div>
                <h2 style={style.title}>Ultimas preguntas</h2>
                {question.map((quest) => {
                    return <p style={style.question}>{quest}</p>
                })}
            </div>
        </div>
    )
}

export default Question;

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '60%',
        margin: '0 3.5rem',
        padding: '0 0 3rem 0',
        color: '#000000e6'
    },
    title: {
        padding: '1.5rem 0 1.5rem 0',
        fontWeight: '600',
        fontSize: 18
    },
    containerInput: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '100%'

    },
    input: {
        padding: 15,
        border: 'solid 2px #D8D8D8',
        borderRadius: 5,
        width: '68%',
        overflowX: 'hidden',
        overflowWrap: 'break-word',
    },
    button: {
        backgroundColor: '#3483fa',
        color: '#FFFFFF',
        fontSize: '17px',
        width: '8rem',
        height: '3rem',
        padding: '0 5px',
        borderStyle: 'none',
        borderRadius: 5
    },
    question: {
        padding: '1rem 0',
        color: '##3e3e3ee6',
        fontSize: 16,
        fontWeight: '400',
    }
}