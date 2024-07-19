/**
 * NotFound
 * 404 오류페이지를 담당하는 페이지
 * 일치하지 않는 전역 URL을 처리함
 * 파일 명은 not-found.tsx가 되어야함
 */

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div
      style={{
        padding: "100px 30px 0 30px",
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "100px" }}>404</h1>
      <p
        style={{
          textAlign: "center",
          lineHeight: "30px",
          marginTop: "30px",
          fontSize: "16px",
        }}
      >
        Sorry, we couldn not find this page. But do not worry, <br /> you can
        find plenty of other content on our{" "}
        <span>
          <Link href={"/"} style={{ color: "#B1D9FA" }}>
            homepage
          </Link>
        </span>
        .
      </p>
    </div>
  );
}
