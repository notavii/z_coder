import React, { useState } from "react";
import "./Questions.css";
import { useNavigate } from "react-router-dom";

const initialQuestions = [
  { id: 1, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 2, title: "Reverse Linked List", difficulty: "Medium", solved: true, bookmarked: true },
  { id: 3, title: "LRU Cache", difficulty: "Hard", solved: false, bookmarked: false },
  { id: 4, title: "Valid Parentheses", difficulty: "Easy", solved: true, bookmarked: false },
  { id: 5, title: "Two Sum1", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 6, title: "Two Sum2", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 7, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 8, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 9, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 10, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 11, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 12, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 13, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 14, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 15, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 16, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 17, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 18, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 19, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
  { id: 20, title: "Two Sum", difficulty: "Easy", solved: false, bookmarked: false },
];

export default function Questions() {

     const [questions, setQuestions] = useState(initialQuestions);
  const navigate = useNavigate();

  const toggleBookmark = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, bookmarked: !q.bookmarked } : q
      )
    );
  };

  const toggleSolved = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, solved: !q.solved } : q
      )
    );
    };

     const openQuestion = (id) => {
     navigate(`/questions/${id}`); // route I'll implement later
     };
  return (
    <div className="questions-container">
      <h2> Coding Questions</h2>
      <div className="questions-list">
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <div className="q-title" onClick={() => openQuestion(q.id)}>{q.title}</div>
            <div className={`q-difficulty ${q.difficulty.toLowerCase()}`}>{q.difficulty}</div>
            <button className={`q-status ${q.solved ? "solved" : "unsolved"}`} onClick={() => toggleSolved(q.id)}>
              {q.solved ? "Solved" : "Solve"}
            </button>
            <button className="q-bookmark" onClick={() => toggleBookmark(q.id)}>
              {q.bookmarked ? " Bookmarked" : " Bookmark"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );}

