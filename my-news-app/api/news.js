const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const API_KEY = "231cf509958443008bff398d363fd7b3"; // Ganti dengan API key NewsAPI Anda
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=id&pageSize=10&apiKey=${API_KEY}`
  );
  const data = await response.json();
  res.status(200).json(data);
};
