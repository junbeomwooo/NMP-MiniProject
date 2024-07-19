"use client";

import styles from "../../styles/movie/about.module.css";
import Similar from "./similar";
import Credit from "./credit";
import Video from "./video";
import { useState } from "react";
import Link from "next/link";

export default function About({ movie, similar, credit, video }) {
  const [isMagnify, setIsMagnify] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const onClickMagnify = () => {
    setIsMagnify(!isMagnify);
  };
  const onClickPopup = () => {
    setIsPopup(!isPopup);
  };
  return (
    <>
      <div
        className={styles.flex}
        style={
          isMagnify || isPopup ? { filter: "blur(20px)", opacity: "60%" } : {}
        }
      >
        <div className={styles.img}>
          <img src={movie.poster_path} alt="poster" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>{movie.title}</h1>
            <div className={styles.status}>
              {movie.status === "Released" ? (
                <img src="/Image/yesmark.png" alt="status" />
              ) : (
                <img src="/Image/nomark.png" alt="status" />
              )}
              <h3>{movie.status}</h3>
            </div>
          </div>
          <div className={styles.runtime}>
            <h3>{`${Math.floor(movie.runtime / 60)}h ${
              movie.runtime % 60
            }m`}</h3>
          </div>
          <div className={styles.production}>
            {movie.production_companies.map((v, i) => {
              return v.logo_path !== "https://image.tmdb.org/t/p/w300null" ? (
                <img key={i} src={v?.logo_path} alt={v.title} />
              ) : (
                <img key={i} src="/Image/none.png" alt={v.title} />
              );
            })}
          </div>
          <div className={styles.aboutSimilar}>
            <h3>
              <Link href={movie.homepage}>{`About · ${movie.title}`}</Link>
            </h3>
            <h3 onClick={onClickPopup}>Similar ➣</h3>
          </div>
          <hr />
          <div className={styles.summary}>
            <div className={styles.poster} onClick={onClickMagnify}>
              <img className={styles.background} src={movie.backdrop_path} />
              <img className={styles.expand} src="/Image/expand.png" />
            </div>
            <div className={styles.tagline}>
              <h3>{movie.tagline || movie.title}</h3>
              <h4>
                <span
                  className={styles.highlight}
                >{`${movie.original_language.toUpperCase()} · Average ${movie.vote_average.toFixed(
                  2
                )} · `}</span>
                <span>{movie.release_date}</span>
              </h4>
              <div className={styles.genres}>
                {Array.isArray(movie.genres) &&
                  movie.genres.map((v, i) => {
                    return <h5 key={i}>{v.name}</h5>;
                  })}
              </div>
            </div>
          </div>
          <div className={styles.overview}>
            <h3>{movie.overview}</h3>
          </div>
          <hr />
          <Credit credit={credit} />
        </div>
      </div>
      <Video video={video} />

      {/* 이미지 클릭시 보여줄 사진*/}
      {isMagnify && (
        <div className={styles.magnify}>
          <div className={styles.absolute} onClick={onClickMagnify}>
            <img className={styles.m_background} src={movie.backdrop_path} />
            <img className={styles.m_expand} src="/Image/expand.png" />
          </div>
        </div>
      )}
      {/* similar 팝업 구현 */}
      {isPopup && <Similar similar={similar} onClickPopup={onClickPopup} />}
    </>
  );
}
