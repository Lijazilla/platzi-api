// NewsDetail.js
import React from "react";

function NewsDetail({ title, description, url, urlToImage }) {
  return (
    <div className="news-detail">
      <h2 className="news-title">{title}</h2>
      <img src={urlToImage} alt={title} className="news-img" />
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Leer más 
      </a>
    </div>
  );
}

export default NewsDetail;
