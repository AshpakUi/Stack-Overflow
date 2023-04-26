import React from "react";
import Questions from "./Questions";

function QuestionsList({questions}) {
  return (
    <>
      {questions.map((question) => (
        <Questions question={question} />
      ))}
    </>
  );
}

export default QuestionsList;
