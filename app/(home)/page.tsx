
/**
 * page.tsx
 * page.tsx 파일은 웹사이트의 각 페이지를 구성하는 React 컴포넌트를 담고 있는 파일
 * app 폴더 내부의 page.js는 루트 파일임으로 프로젝트의 홈페이지를 담당
 *
 * root폴더 내부의 중요파일
 * page.tsx : 홈
 * layout.tsx(없을 때 실행할경우 nextjs가 자동으로 생성해줌)
 * not-found.twx : 404에러 페이지
 */
import Movie from "../../components/movie/movie";
import styles from '../../styles/home/home.module.css';
import SwiperComponent from "../../components/swiper/swiper";

// export const metadata = {
//   title: "Home",
// };

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

/** Next.js는 기본 웹 fetch() API를 확장하여 서버의 각 요청이 자체 영구 캐싱 의미를 설정할 수 있도록 함. */
async function getMoives() {
  const response = await fetch(API_URL);
  const json = await response.json(); //json으로 파싱
  return json;
}

export default async function HomePage() {
  const movies = await getMoives();

  return (
    <>
    <div>
      <SwiperComponent movies={movies} />
    </div>


    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
       ))}
    </div>
    </>
  );
}
