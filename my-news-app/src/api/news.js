export const fetchNews = async () => {
  try {
    // Menambahkan headers untuk mengontrol cache
    const response = await fetch("/newsData.json", {
      headers: { "Cache-Control": "no-cache" },
    });
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};
