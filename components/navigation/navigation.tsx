// "use client"; // hydrate하기 (client component) 위해 필요한 키워드

/** React client hook in Server Component 오류
 * 서버 컴포넌트에서 React 클라이언트 훅을 사용하고 있을 때 발생하는 오류로 
 * 'use client' 를 추가해 클라이언트 컴포넌트로 바꿔줘야 함
*/

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from '../../styles/navigation/navigation.module.css';

/**
 *  usePathname
 *  usePathname은 현재 URL의 pathname을 읽을 수 있게 해주는 클라이언트 컴포넌트 훅
 */

export default function Navigation() {
  // const path = usePathname();

  return (
    <nav className={styles.nav}>
      <div />
      <a href="/">
        <h1>NMP</h1>
      </a>
      <hr className={styles.hr} />
    </nav>
  );
}
