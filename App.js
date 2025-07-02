import React, { useState } from "react";
import "./App.css";

export default function Feedback4Square() {
  const [feedback, setFeedback] = useState({
    learnerPositive: "",
    teacherPositive: "",
    learnerNegative: "",
    teacherNegative: "",
  });

  const handleChange = (key, value) => {
    setFeedback({ ...feedback, [key]: value });
  };

  const handleCopy = () => {
    const text = `Feedback 4 Square\n\n+ Learner: ${feedback.learnerPositive}\n+ Teacher: ${feedback.teacherPositive}\n- Learner: ${feedback.learnerNegative}\n- Teacher: ${feedback.teacherNegative}`;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleClear = () => {
    setFeedback({
      learnerPositive: "",
      teacherPositive: "",
      learnerNegative: "",
      teacherNegative: "",
    });
  };

  return (
    <div className="container">
      <h1 className="title">Feedback 4 Square</h1>
      <div className="header-row">
        <div></div>
        <div>Learner</div>
        <div>Teacher</div>
      </div>

      <div className="feedback-row">
        <div className="label">+</div>
        <textarea
          placeholder="Positive feedback for learner"
          value={feedback.learnerPositive}
          onChange={(e) => handleChange("learnerPositive", e.target.value)}
        />
        <textarea
          placeholder="Positive feedback for teacher"
          value={feedback.teacherPositive}
          onChange={(e) => handleChange("teacherPositive", e.target.value)}
        />
      </div>

      <div className="feedback-row">
        <div className="label">-</div>
        <textarea
          placeholder="Negative feedback for learner"
          value={feedback.learnerNegative}
          onChange={(e) => handleChange("learnerNegative", e.target.value)}
        />
        <textarea
          placeholder="Negative feedback for teacher"
          value={feedback.teacherNegative}
          onChange={(e) => handleChange("teacherNegative", e.target.value)}
        />
      </div>

      <div className="button-row">
        <button onClick={handleCopy}>Copy</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}
