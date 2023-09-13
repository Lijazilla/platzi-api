import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { getGeneralNews } from "../api/api";
import NewsDetail from "../news-detail/news-detail";

const GeneralNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async() => {
      const response = await axios.get(getGeneralNews);
      console.log(response)
      setArticles(response.data.articles)
    }
      getArticles()
  }, [])
  return(
    <div>
        {articles.map(article => {
          return (<NewsDetail
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
          />)
        })}

    </div>
  )
}

export default GeneralNews;