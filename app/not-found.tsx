/**
 * NotFound
 * 404 오류페이지를 담당하는 페이지
 * 일치하지 않는 전역 URL을 처리함
 * 파일 명은 not-found.tsx가 되어야함
 */

import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Not Found"
}

export default function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
    </div>
  );
}
