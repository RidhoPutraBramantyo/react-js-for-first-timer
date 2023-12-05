// NewsItem.js
import React from "react";
import "../css/NewsItem.css";

const NewsItem = ({ article }) => (
  <div className="news-item">
    <h3>{article.title}</h3>
    <p>{article.description}</p>
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      Baca lebih lanjut
    </a>
  </div>
);

export default NewsItem;
