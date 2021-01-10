import React, { useState, useEffect } from "react";
import Question from "./question/Question";

export default function QuestionList() {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/questions")
            .then(res => res.json())
            .then(data => setQuestions(data.data));
    }, []);
    return (
        <div className="bg-gray-100">
            {questions.length === 0 ? (
                <p>Fetching questions.....</p>
            ) : (
                questions.map(question => <Question question={question} />)
            )}
        </div>
    );
}
