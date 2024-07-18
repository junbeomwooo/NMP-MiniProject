import styles from "../../styles/movie/video.module.css";
import { useState, useRef, useEffect } from "react";

export default function Video({ video }) {
  const [videoKey, setVideoKey] = useState(video[0].key);

  const onClickChange = (key: string) => {
    setVideoKey(key);
  };

  const videoRef = useRef(null);
  const playlistRef = useRef(null);

  useEffect(() => {
    const changeListHeight = () => {
        const videoHeight = videoRef.current.offsetHeight;
        playlistRef.current.style.height = `${videoHeight}px`;
    }
    changeListHeight();
    window.addEventListener("resize",changeListHeight);
    return() => {
        window.removeEventListener("resize", changeListHeight);
    }
  }, [videoRef]);

  return (
    <>
    <hr className={styles.hr} />
    <div className={styles.container}>
      <div className={styles.videoWrapper} ref={videoRef}>
        <iframe
          src={`https://youtube.com/embed/${videoKey}`}
          allowFullScreen
          title={video[0].name}
        ></iframe>
      </div>
      <div className={styles.playlist} ref={playlistRef}>
        <div className={styles.info}>
          <h3>Other Recommended Content</h3>
          <h4>▶ {video.length}</h4>
        </div>
        <div className={styles.list}>
          <ul>
            {video.map((v, i) => (
              <div key={i}>
                <li
                  onClick={() => {
                    onClickChange(v.key);
                  }}
                  style={
                    videoKey === v.key
                      ? { color: "white", fontWeight: "400" }
                      : {}
                  }
                >
                  {v.name}
                </li>
                <hr />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
