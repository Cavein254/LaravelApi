import React, { useEffect, useState } from "react";
import { apiClient } from "../../api";
import Questions from "./Questions";
import "./styles.css";

function QuestionList() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log("on use effect");
        apiClient.get("questions").then((response) => {
            let data = response.data;
            if (data) {
                setLoading(false);
                const questionData = data;
                setQuestions(questionData);
            }
        });
    }, []);

    return (
        <>
            {questions.map((question) => {
                return <Questions key={question.id} data={question} />;
            })}
        </>
    );
}

export default QuestionList;
