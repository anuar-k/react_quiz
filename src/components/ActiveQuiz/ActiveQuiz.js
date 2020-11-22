import React from "react";
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";


class ActiveQuiz extends React.Component {

    render() {
        return (
            <div className={classes.ActiveQuiz}>
                <p className={classes.Question}>
            <span>
                <strong> {this.props.answerNumber}.</strong>&nbsp;
                {this.props.question}
            </span>
                    <small> {this.props.answerNumber} из {this.props.quizLength}</small>
                </p>
                <AnswersList
                    state={this.props.state}
                    answers={this.props.answers}
                    onAnswerClick={this.props.onAnswerClick}
                />
            </div>
        )
    }
}



// const ActiveQuiz = props => (
//     <div className={classes.ActiveQuiz}>
//         <p className={classes.Question}>
//             <span>
//                 <strong> {props.answerNumber}.</strong>&nbsp;
//                 {props.question}
//             </span>
//             <small> {props.answerNumber} из {props.quizLength}</small>
//         </p>
//         <AnswersList
//             state={props.state}
//             answers={props.answers}
//             onAnswerClick={props.onAnswerClick}
//         />
//     </div>
// )
export default ActiveQuiz