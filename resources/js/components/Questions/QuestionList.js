import React, { useEffect, useState } from "react";
import { apiClient } from "../../api";
import Questions from "./Questions";
import "./styles.css";

function QuestionList() {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        console.log("on use effect");
        apiClient.get("questions").then((response) => {
            setQuestions(response.data.data);
        });
    }, []);
    console.log(questions);
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
