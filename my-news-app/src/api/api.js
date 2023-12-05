const API_KEY = "231cf509958443008bff398d363fd7b3";
const BASE_URL =
  "https://newsapi.org/v2/top-headlines?country=id&pageSize=10&apiKey=" +
  API_KEY;

export const fetchNews = async (searchQuery = "") => {
  const url = searchQuery
    ? `${BASE_URL}&q=${encodeURIComponent(searchQuery)}`
    : BASE_URL;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};
