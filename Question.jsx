import React, { useState } from "react";
import "./Question.css";

function Question() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle the form submission, like sending data to an API
    setMessage("Form submitted!");
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setTags("");
  };

  return (
    <div className="question-container">
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Start your question with how, what, why, etc."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            rows="5"
            placeholder="Describe your problem"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Please add up to 3 Tags to describe what your question is about"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Post</button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Question;