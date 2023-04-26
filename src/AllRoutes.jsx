import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import AllQuestions from "./pages/Question/AllQuestions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Question/DisplayQuestion";
function AllRoutes() {
  return (
    <div className="Allroutes-component">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Questions" element={<AllQuestions />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route path="/Questions/:id" element={<DisplayQuestion/>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
