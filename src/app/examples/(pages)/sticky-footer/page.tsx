/**
 * 이 컴포넌트는 "sticky footer" 예제입니다.
 *
 * [동작 설명]
 * - sticky footer는 `sticky`, `bottom-0` 클래스를 적용하여 뷰포트 하단에 고정됩니다.
 * - `-z-10` 클래스로 인해 푸터가 다른 요소들 뒤로 배치되어, 메인 컨텐츠가 푸터 위에 표시됩니다.
 * - 스크롤과 관계없이 푸터는 항상 화면 하단에 고정되어 있으며, 컨텐츠가 푸터 위를 지나갈 때 겹쳐서 보입니다.
 *
 * [활용 사례]
 * - 배경 푸터: 컨텐츠 뒤에 배경처럼 고정된 푸터
 * - 겹침 효과: 메인 컨텐츠가 푸터 위로 스크롤되는 시각적 효과
 * - 레이어드 디자인: 여러 레이어가 겹치는 복합적인 레이아웃
 */
export default function StickyFooterDemo() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-10 flex justify-center bg-zinc-100 p-4">
        <h1 className="font-bold">Header</h1>
      </header>
      {/* Main content: 스크롤을 만들기 위해 충분히 긴 컨텐츠 추가 */}
      <main className="flex flex-col items-center justify-start p-4 space-y-4 min-h-[200vh] bg-white">
        <h2 className="font-bold">Main Content</h2>
        <div className="text-center">
          <p>
            아래로 스크롤해 보세요. sticky 푸터는 z-index가 음수(-z-10) 설정되어
            있어서 메인 컨텐츠가 푸터 위로 스크롤될 때 겹쳐서 보입니다.
          </p>
          <p>
            푸터는 항상 화면 하단에 고정되어 있으며 컨텐츠가 푸터 위를 지나가는
            시각적 효과를 확인할 수 있습니다.
          </p>
        </div>
      </main>
      {/* sticky footer - 뷰포트 하단에 고정되지만 z-index 음수로 인해 컨텐츠 뒤에 배치 */}
      <footer className="sticky bottom-0 inset-x-0 -z-10 flex justify-center items-center px-4 py-10 bg-zinc-100">
        <h1 className="font-bold">Footer</h1>
      </footer>
    </>
  );
}
