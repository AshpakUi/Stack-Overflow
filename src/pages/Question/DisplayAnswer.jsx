import React from "react";
import QuestionsDetails from "./QuestionsDetails";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";

function DisplayAnswer({ question }) {
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>ans.anwerBody</p>
          <div className="question-actions-user">
            <div>
              <button type="button">Share</button>
              <button type="button">Delete</button>
            </div>
            <div>
              <p>answer {ans.answeredOn}</p>
              <Link
                to={`/User/${question.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avatar backgroundColor={"green"} px="8px" py="5px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{question.userPosted}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayAnswer;
