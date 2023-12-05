import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ articles }) => {
  if (!Array.isArray(articles) || articles.length === 0) {
    return <div>Tidak ada berita untuk ditampilkan.</div>;
  }

  return (
    <div>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
