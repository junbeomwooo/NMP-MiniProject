import { API_URL } from "../../../constant";
import About from "../../../../components/about/about";

/** generateMetadata()
 * 이 함수는 동적 제목을 가진 페이지를 위한 메타데이터 설정 함수
 * 같은 페이지에서 같은 데이터를 두번 받아옴으로써 첫번째 작업에 캐시가 되기때문에
 * 두번째에서는 캐시된 응답을 받기때문에 성능 저하에 문제는 없음 (즉 API호출 X)
 */

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const getSimilar = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

const getCredit = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

const getVideo = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetailPage({
  params: { id }, // 구조분해
}: IParams) {
  const [movie, similar, credit, video] = await Promise.all([getMovie(id), getSimilar(id), getCredit(id), getVideo(id)]);

  return (
    <About movie={movie} similar={similar} credit={credit} video={video} />
  );
}
