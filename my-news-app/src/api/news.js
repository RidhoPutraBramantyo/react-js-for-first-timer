export const fetchNews = async () => {
  try {
    const response = await fetch("/newsData.json"); // Mengakses file JSON dari direktori public
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};
