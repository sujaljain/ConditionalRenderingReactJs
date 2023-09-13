import React, { useState } from "react";
import "./Article.css";

function Article() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [articleText, setArticleText] = useState("");
  const [tags, setTags] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    // For now, we'll just set the submitted state to true
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Post an Article</h2>
      {submitted && <p className="success-message">Form submitted successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Enter a descriptive title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter a descriptive title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="abstract">Enter Abstract for your post</label>
          <textarea
            id="abstract"
            placeholder="Enter Abstract for your post"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="articleText">Enter the complete text of your post</label>
          <textarea
            id="articleText"
            placeholder="Enter the complete text of your post"
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            placeholder="Please add up to 3 Tags to describe your article"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <button type="submit" className="post-button">
          Post
        </button>
      </form>
    </div>
  );
}

export default Article;