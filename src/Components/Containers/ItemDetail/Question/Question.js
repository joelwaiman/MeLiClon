import React, { useState } from "react";
import './Question.css'

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
        <div className="container-question">
            <h2 className="title-question">Preguntale al vendedor</h2>
            <div className="containerInput-question">
                <input className="input-question" value={input} onChange={handlerToAdd} placeholder="Escribí tu pregunta" />
                <button disabled={input === ''} className="button-question" onClick={addQuestion}>Preguntar</button>
            </div>
            <div>
                <h2 className="title-question">Ultimas preguntas</h2>
                {question.map((quest) => {
                    return <p className="question">{quest}</p>
                })}
            </div>
        </div>
    )
}

export default Question;