"use client";

import styles from "../../styles/footer/footer.module.css";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <hr className={styles.hr} />
      <div className={styles.flex}>
        <div className={styles.copyright}>
          <h1>@2024 Junbeom Woo</h1>
        </div>
        <div className={styles.contact}>
          <div>
            <img src="/Image/github.png" alt="github" onClick={()=> {router.push('https://github.com/junbeomwooo')}}/>
            <img src="/Image/linkedin.png" alt="linkedin" onClick={()=> {router.push('https://www.linkedin.com/in/woojunbeom/')}}/>
          </div>
          <h2>junbeom2.woo@gmail.com</h2>
          <h2>+45 44 11 14 18</h2>
        </div>
      </div>
    </>
  );
}
