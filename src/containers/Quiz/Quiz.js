import React, {Component} from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinisheQuiz/FinishedQuiz";

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'Какого цвета небо',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Красный', id: 2},
                    {text: 'Синий', id: 3},
                    {text: 'Зеленый', id: 4},
                ]
            },
            {
                question: 'В каком году основал Астану',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1456', id: 2},
                    {text: '1909', id: 3},
                    {text: '2010', id: 4},
                ]
            },
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer id: ', answerId)
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            const timeout = window.setTimeout(() => {
                window.clearTimeout(timeout)
            }, 1000)

            if (this.isQuizFinished()) {
                this.setState({
                    isFinished: true
                })
            } else {
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1
                })
            }
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })

        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    onRetryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.onRetryHandler}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[0].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz