import React from "react";
import axios from 'axios'
import Questions from './Questions'
import { BASE_API_URL } from '../../api'
import "./styles.css";

function QuestionList() {
    const [questions, setQuestions] = React.useState([]);
    React.useEffect(() => {
        const fetchQuestions = async () => {
            const questions = await axios.get(BASE_API_URL + 'questions')
                .then(response => { setQuestions(response.data.data) })
                .catch(error => console.error(error))
        }
        fetchQuestions()
    }, []);

    return (
        <>
            {questions.map((question) => {
                const short = question.attributes;
                return (
                    <Questions key={question.id} data={short} />
                )
            })}
        </>
    );
}



export default QuestionList;


