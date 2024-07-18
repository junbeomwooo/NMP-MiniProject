"use client";

import Link from "next/link";
import styles from "../../styles/movie/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
  /** useRouter
   * 사용하면 Next.js 컴포넌트에 네비게이션 및 라우팅 로직을 원활하게 통합할 수 있음
   
   // 다른 페이지로 이동
      const goToPage = () => {
        router.push('/another-page');
      };

      // 현재 라우트를 대체 (리다이렉트 시 유용)
      const replacePage = () => {
        router.replace('/another-page');
      };

      // 현재 라우트의 경로명 접근
      const currentPath = router.pathname;

      // 쿼리 매개변수 접근
      const query = router.query;

   */

  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
