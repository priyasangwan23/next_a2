"use client";

import React, { useState } from "react";

export default function FeedbackWidget() {
  const [feedback, setFeedback] = useState<string | null>(null);

  return (
    <div className="feedback-box">
      <span className="feedback-text">Was this guide helpful?</span>
      <div className="feedback-buttons">
        <button
          type="button"
          onClick={() => setFeedback("positive")}
          className={`feedback-btn ${feedback === "positive" ? "submitted" : ""}`}
        >
          {feedback === "positive" ? "✓ Thanks!" : "Yes, thanks!"}
        </button>
        <button
          type="button"
          onClick={() => setFeedback("constructive")}
          className={`feedback-btn ${feedback === "constructive" ? "submitted" : ""}`}
        >
          {feedback === "constructive" ? "Noted, thank you" : "Could be better"}
        </button>
      </div>
    </div>
  );
}
