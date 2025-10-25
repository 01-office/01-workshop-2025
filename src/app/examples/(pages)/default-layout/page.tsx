/**
 * 이 컴포넌트는 세 부분(헤더, 메인, 푸터)으로 이루어진 화면 전체 레이아웃 예제입니다.
 *
 * [전체 레이아웃 구조]
 * - <div> 엘리먼트는 Tailwind CSS의 `grid`, `min-h-svh`, `grid-rows-[auto_1fr]` 클래스를 사용합니다.
 *   - `min-h-svh`: 뷰포트의 최소 높이만큼 컨테이너가 확장됩니다.
 *   - `grid-rows-[auto_1fr]`: 두 행의 그리드를 만듭니다.
 *     - 1번째 행(auto): 헤더(높이 자동)
 *     - 2번째 행(1fr): 메인(나머지 모든 공간 차지)
 * - 푸터는 <div> 외부에 위치해, 컨텐츠가 부족할 때에는 항상 **화면 하단**에 표시되고, 스크롤이 생길 정도로 컨텐츠가 많으면 하단에 고정되지 않습니다.
 *
 * [Header]
 * - <header>는 그리드의 첫 번째 행에 위치합니다.
 * - Tailwind CSS의 `sticky`, `top-0`, `z-10`을 사용해서 스크롤해도 항상 화면 상단에 고정됩니다.
 *
 * [Main]
 * - <main>은 그리드의 두 번째 행(1fr)에 위치하여 남은 모든 세로 공간을 채웁니다.
 *
 * [Footer]
 * - <footer>는 <div> 밖(즉, <main> 밑)에 렌더링됩니다.
 * - 이 푸터는 항상 화면 하단에 고정되는 것은 아니라, 컨텐츠가 충분히 많아 스크롤이 생기면 화면 하단에서 벗어날 수 있습니다.
 *
 * [정리]
 * - 이 예제는 CSS Grid와 Flex를 활용해서 헤더는 스크롤 시 상단 고정, 메인은 헤더 제외 영역을 모두 사용, 푸터는 중앙 정렬된 레이아웃의 전형적인 구조를 구현합니다.
 */
export default function DefaultLayoutPage() {
  return (
    <>
      {/* 전체 레이아웃: 헤더(고정) + 메인(남은공간채움) */}
      <div className="grid min-h-svh grid-rows-[auto_1fr]">
        {/* Header: 스크롤 시 상단 고정 */}
        <header className="sticky flex justify-center top-0 z-10 bg-zinc-100 p-4">
          <h1 className="font-bold">Header</h1>
        </header>
        {/* Main: 헤더 외 공간을 모두 차지하는 중앙 정렬 컬럼 */}
        <main className="flex justify-center items-center flex-col p-4">
          <h1 className="font-bold">Main</h1>
          <p>
            이 예제는 "Main" 영역이 헤더를 제외한 높이만큼 차지하도록 설정되어
            있습니다.
          </p>
        </main>
      </div>
      {/* Footer: 화면 맨 아래에 위치하나, 컨텐츠가 많아 스크롤될 경우 최하단 고정은 아닙니다. */}
      <footer className="flex justify-center items-center p-4 bg-zinc-100">
        <h1 className="font-bold">Footer</h1>
      </footer>
    </>
  );
}
