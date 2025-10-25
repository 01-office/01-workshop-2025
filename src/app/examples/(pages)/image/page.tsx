/**
 * 이 컴포넌트는 여러 이미지 렌더링 예제입니다.
 *
 * [동작 설명]
 * - 다양한 방식의 이미지 렌더링과 최적화를 보여줍니다.
 * - 정적 파일과 Next.js의 Image 컴포넌트를 모두 시연합니다.
 */
import Image from "next/image";

export default function ImageExample() {
  return (
    <main className="p-6 flex flex-col gap-10">
      <h1 className="font-bold text-2xl">이미지 예제</h1>

      {/* Next.js Image 컴포넌트를 사용한 최적화된 이미지 렌더링 */}
      <section className="flex flex-col gap-2">
        <h2 className="font-semibold text-lg">Next.js Image 최적화 예시</h2>
        <div>
          <Image
            src="/assets/textbook/1.png"
            alt="textbook with Next.js Image"
            width={320}
            height={440}
            className="border"
            priority
          />
        </div>
        <p className="text-zinc-500 text-sm">
          위 이미지는 <b>Next.js Image</b> 컴포넌트를 활용한 예시입니다.
          <br />
          (자동 최적화, lazy-load 등 적용 ※ priority 지정)
        </p>
      </section>

      {/* 전통적인 img 태그 사용 */}
      <section className="flex flex-col gap-2">
        <h2 className="font-semibold text-lg">기본 img 태그 사용</h2>
        <div>
          <img
            src="/assets/textbook/1.png"
            alt="textbook with img tag"
            width={320}
            height={440}
            className="border"
          />
        </div>
        <p className="text-zinc-500 text-sm">
          위 이미지는 <b>&lt;img&gt;</b> 태그를 활용한 예시입니다.
          <br />
          (브라우저 기본 동작, 최적화는 직접 설정 필요)
        </p>
      </section>
    </main>
  );
}
