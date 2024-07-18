"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/movie/credit.module.css";

export default function Credit({ credit }) {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={6}
        breakpoints={{
          0: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 6,
          }
        }}
        spaceBetween={30}
        className={styles.swiper}
        grabCursor={true}
      >
        
        {credit.map((v, i) => (
          <SwiperSlide key={i} className={styles.swiper_slide}>
            <img src={v.profile_path || '/Image/noimage.png'} alt={v.name} />
            <div className={styles.content}>
              <h1>{v.name}</h1>
              <h2>{v.character}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
