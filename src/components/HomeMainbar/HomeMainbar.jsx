import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./HomeMainbar.css";
import QuestionsList from "./QuestionsList";
function HomeMainbar() {
  var questionList = [
    {
      _id: 1,
      upVotes: 1,
      downVotes:0,
      noOfAnswer: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "mango",
      askedOn: "jan 1",
      answer:[{
        answerBody:"Answer",
        userAnswered:"Kumar",
        answeredOn:"jan 2",
        useId:2,
      }]
    },
    {
      _id: 2,
      upVotes: 3,
      downVotes:1,
      noOfAnswer: 1,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "r", "python"],
      userPosted: "mango",
      askedOn: "jan 1",
      answer:[{
        answerBody:"Answer",
        userAnswered:"Kumar",
        answeredOn:"jan 2",
        useId:2,
      }]
    },
    {
      _id: 3,
      upVotes: 8,
      downVotes:2,
      noOfAnswer: 1,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mango",
      askedOn: "jan 1",
      answer:[{
        answerBody:"Answer",
        userAnswered:"Kumar",
        answeredOn:"jan 2",
        useId:2,
      }]
    },
  ];
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const redirect = () => {};
  const checkAuth = () => {
    if (user === null) {
      alert("login or signup a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Question page</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionList === null ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            <p>{questionList.length} questions</p>
            <QuestionsList questions={questionList} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeMainbar;
