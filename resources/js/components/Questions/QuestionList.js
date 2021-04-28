import React from "react";
import axios from 'axios'
import Questions from './Questions'
import { Row, Col, Container } from "react-bootstrap";
import { FaEye, FaThumbsUp } from "react-icons/fa";
import "./styles.css";

function QuestionList() {
    const [questions, setQuestions] = React.useState([]);
    React.useEffect(() => {
        const fetchQuestions = async () => {
            const questions = await axios.get('http://127.0.0.1:8000/api/questions')
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


