import { Metadata } from "next";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import "../styles/global.css"

/** metadata는 layout과 달리 중첩되지않고 병합됌
 * metadatas는 컴포넌트에서 내보낼 수 없고 meatadata는 서버 컴포넌트에서만 있을수있음(클라이언트 컴포넌트 x)
 */
export const metadata:Metadata = {
  title: {
    template: "%s | NMP",
    default: "NMP" // %s 스트링값이 안들어오면 보여줄 값
  }, 
   description: "The best movies on the best frame work",
};


export default function Layout({
  // 이 함수이름은 변경 가능 [default: RootLayout];
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children} {/**이 부분이 컴포넌트들 */}
        <Footer />
      </body>
    </html>
  );
}

/**
 * 아래 와같이 작동하는데 현재 위치하는 이 파일은 컴포넌트들을 감싸고있는 'Layout'이다.
 * 레이아웃은 중첩이 가능하며 같은 폴더또는 하위 폴더의 모든 파일에 적용됌.
 * <Layout>
 *  <Components> // children
 *  ...
 * </Layout>
 */
