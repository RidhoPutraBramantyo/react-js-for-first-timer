import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import { fetchNews } from "./api/api";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempQuery, setTempQuery] = useState("");

  useEffect(() => {
    const getNews = async () => {
      const newsArticles = await fetchNews(searchQuery);
      setArticles(newsArticles);
    };

    getNews();
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(tempQuery);
  };

  return (
    <div className="container">
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tempQuery}
          onChange={(e) => setTempQuery(e.target.value)}
        />
        <button type="submit">Cari</button>
      </form>
      <NewsList articles={articles} />
    </div>
  );
};

export default App;
