import React, { useState } from "react";
import styles from './Question.module.css'

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
        <div className={styles.container}>
            <h2 className={styles.title}>Preguntale al vendedor</h2>
            <div className={styles.container_input}>
                <input className={styles.input}
                    value={input}
                    onChange={handlerToAdd}
                    placeholder="Escribí tu pregunta" />
                <button disabled={input === ''}
                    className={styles.button}
                    onClick={addQuestion}>
                    Preguntar
                </button>
            </div>
            <div>
                <h2 className={styles.title_questions}>Ultimas preguntas</h2>
                {question.map((quest) => {
                    return <p className={styles.question}
                        key={quest}>
                        {quest}
                    </p>
                })}
            </div>
        </div>
    )
}

export default Question;