import React, { useEffect, useState } from "react";
import { getScienceNews } from "../api/api";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ScienceNews() {
  const [scienceNews, setScienceNews] = useState([]);

  useEffect(() => {
    const fetchScienceNewsData = async () => {
      const data = await getScienceNews();
      setScienceNews(data);
    };

    fetchScienceNewsData();
  }, []);

  return (
    <div>
      <h2>Noticias de Cienca</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {scienceNews.map((article, index) => (
          <SwiperSlide key={index}>
            <div>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ScienceNews;
