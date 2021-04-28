import React from "react";
import axios from 'axios'
import Question from "./Questions";

function QuestionList() {
    const [questions, setQuestions] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/questions')
            .then(response => {
                // setQuestions(response.data)
                console.log(response.data)
            })
            .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <Question />
            <Question />
            <Question />
        </div>
    );
}

export default QuestionList;
