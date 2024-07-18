"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "../../styles/swiper/swiper.module.css";
import { useRouter } from "next/navigation";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

export default function App({ movies }) {
  // 영화 overView 글자수 설정할 상태값 (반응형, 웹사이트의 크기에 따라)
  const [overViewLen, setOverViewLen] = useState(0);

  // 라우터
  const router = useRouter();

  // 컴포넌트 렌더링시 실행
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setOverViewLen(250);
      } else if (window.innerWidth > 768) {
        setOverViewLen(150);
      } else if (window.innerWidth > 576) {
        setOverViewLen(0);
      }
    };
    handleResize();
    // 이벤트 등록
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.body}>
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 50, // 슬라이드 회전 각도
          stretch: 0, // 슬라이드 사이 공간 (px)
          depth: 100, //px단위 깊이 오프셋
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className={styles.swiper}
      >
        {movies.map((v, i) => {
          return (
            <SwiperSlide key={i} className={styles.swiperSlide}>
            
              <img
                className={styles.img}
                src={overViewLen === 0 ? v.poster_path : v.backdrop_path}
                onClick={() => {
                  router.push(`/movies/${v.id}`);
                }}
              />
              {overViewLen === 0 ? (
                <></>
              ) : (
                <div className={styles.description}>
                  <h1>{v.title}</h1>
                  {v.overview.length > overViewLen ? (
                    <h2>{`${v.overview.slice(0, overViewLen)}...`}</h2>
                  ) : (
                    <h2>{v.overview}</h2>
                  )}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
