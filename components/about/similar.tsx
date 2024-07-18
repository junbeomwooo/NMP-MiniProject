"use client";

import styles from "../../styles/movie/similar.module.css";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function Similar({ similar, onClickPopup }) {
  const router = useRouter();

  const onClickMove = (id) => {
    router.push(`/movies/${id}`);
    onClickPopup();
  }

  return (
    <div className={styles.container}>
      <div className={styles.box} onClick={() => onClickPopup()}>
        <Swiper
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            950: {
              slidesPerView: 4,
              spaceBetween: 20
            },
          }}
          centeredSlides={true}
          initialSlide={2}
          grabCursor={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1000000,
            disableOnInteraction: false, 
          }}
          modules={[Pagination, Autoplay]}
          className={styles.swiper}
        >
          {similar.map((v, i) => (
            <SwiperSlide className={styles.swiper_slide} key={i}>
              <img src={v.poster_path} alt={v.title} onClick={() => onClickMove(v.id)}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
