"use client";

import { RingLoader } from "react-spinners";

export default function Loading() {
  /**loading.tsx
   *  React Suspense를 사용하여 각각 컴포넌트 부분의 로딩 UI를 만들 수도 있음
   * ex) <Suspense fallback={<Loading />} >
   *        <Component />
   *    </Suspense>
   * SSR이 발생하는 기간동안 보여줄 컴포넌트이며 로딩이 완료된다면 새 콘텐츠로 자동 교체
   */
  return (
    <div style={{'width':'100%', 'height':'800px', "display":"flex", "justifyContent":"center", "alignItems":"center"}}>
      <RingLoader color="white" size={100}/>
    </div>
  );
}
