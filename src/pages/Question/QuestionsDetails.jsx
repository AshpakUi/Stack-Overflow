import React from "react";
import {useParams,Link} from "react-router-dom";
import upvotes from "../../assets/sort-up.svg"
import downvotes from "../../assets/sort-down.svg"
import Avatar from "../../components/Avatar/Avatar";
import "./Question.css"
import Questions from "../../components/HomeMainbar/Questions";
function QuestionsDetails() {

    const {id}=useParams()
    var questionList = [
        {
          _id: "1",
          upVotes: 3,
          downVotes:2,
          noOfAnswer: 2,
          questionTitle: "What is a function?",
          questionBody: "It meant to be",
          questionTags: ["java", "node js", "react js", "mongodb"],
          userPosted: "mango",
          useId:1,
          askedOn: "jan 1",
        },
        {
          _id: "2",
          upVotes: 3,
          downVotes:2,
          noOfAnswer: 0,
          questionTitle: "What is a function?",
          questionBody: "It meant to be",
          questionTags: ["java", "node js", "r", "python"],
          userPosted: "mango",
          useId:1,
          askedOn: "jan 1",
        },
        {
          _id: "3",
          upVotes: 3,
          downVotes:2,
          noOfAnswer: 0,
          questionTitle: "What is a function?",
          questionBody: "It meant to be",
          questionTags: ["javascript", "R", "python"],
          userPosted: "mango",
          useId:1,
          askedOn: "jan 1",
        },
      ];
  return (
    <div className="question-details-page">
      {questionList === null ? <h1>Loding...</h1> :
       <>
          {
            questionList.filter((question=>question._id===id)).map((question)=>(
                <div key={question._id}>
                     <section className="Question-details-container">
                        <h1>{question.questionTitle}</h1>
                        <div className="question-details-container-2">
                            <div className="question-votes">
                                <img src={upvotes} width="18" alt="" />
                                <p>{question.upVotes - question.downVotes}</p>
                                <img src={downvotes}  width="18" alt="" />
                            </div>
                            <div style={{width:"100%"}}>
                               <p className="question-body">{question.questionBody}</p>
                               <div className="question-details-tags">
                                {
                                   question.questionTags.map((tag)=>(
                                    <p key={tag}>{tag}</p>
                                   ))
                                }
                               </div>
                               <div className="question-action-user">
                                <div>
                                    <button type="button">Share</button>
                                    <button type="button">Delete</button>
                                </div>
                                <div>
                                    <p>asked {question.askedOn}</p>
                                    <Link to={`/User/${question.useId}`} className="user-link" style={{color:'#0086d8'}}>
                                        <Avatar backgroundColor={"orange"} px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                    </Link>
                                </div>
                               </div>
                            </div>
                        </div>
                     </section>
                </div>
            ))
          }   
       </>}
    </div>
  );
}

export default QuestionsDetails;
