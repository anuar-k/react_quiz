import React from "react";
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = (props) => {
    //Считаем количество правильных ответов
    console.log('props finish' ,props.results)
    const SuccessCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <h1>Finished</h1>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            classes[props.results[quizItem.id]]
                        ]
                        return (
                            <li key={index}>
                                <strong>{index + 1}</strong>.&nbsp;
                                {quizItem.question}
                                <i className={cls.join(' ')}/>
                            </li>
                        )
                    })
                }
                <p>Правильно {SuccessCount} из {props.quiz.length}</p>
            </ul>

            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Link to={'/'}><Button type="success">Перейти в список тестов</Button> </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz