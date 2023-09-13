// api.js
const apiKey = "ea1e82f007ad49fa992a391a21ac93bc";

export const getGeneralNews = async () => {
  
  const url = `https://newsapi.org/v2/top-headlines?category=general&language=es&country=mx&apiKey=${apiKey}`;

  return url;
    
};

export const getTechnologyNews = async () => {
  try {
    const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching Technology news", error);
    return [];
  }
};

export const getScienceNews = async () => {
    try {
    const url = `https://newsapi.org/v2/top-headlines?category=science&language=en&country=us&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching Science news", error);
    return [];
  }
}

export const getBusinessNews = async () => {
    try {
        const url = `https://newsapi.org/v2/top-headlines?category=business&language=en&country=us&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.articles;
      } catch (error) {
        console.error("Error fetching Business news", error);
        return [];
      }
}