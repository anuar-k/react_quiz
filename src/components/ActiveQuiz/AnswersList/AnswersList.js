import React from "react";
import classes from './AnswersList.module.css'
import AnswerItem from "./AnswerItem/AnswerItem";

class AnswersList extends React.Component {


    render() {
        // console.log(this.props)
        return (

            <ul className={classes.AnswersList}>
                {this.props.answers.map((answer, index) => {
                    return (
                        <AnswerItem
                            key={index}
                            answer={answer}
                            onAnswerClick={this.props.onAnswerClick}
                            state={this.props.state ? this.props.state[answer.id] : null}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default AnswersList