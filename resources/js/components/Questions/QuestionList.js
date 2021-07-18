import React, { useEffect, useState } from "react";
import { apiClient } from "../../api";
import Questions from "./Questions";
import "./styles.css";

function QuestionList() {
    const [question, setQuestion] = useState([]);
    useEffect(() => {
        apiClient.get("questions").then((response) => {
            setQuestion(response.data);
        });
    }, []);
    return (
        <>
            {questions.map((question) => {
                const short = question.attributes;
                return <Questions key={question.id} data={short} />;
            })}
        </>
    );
}

export default QuestionList;
