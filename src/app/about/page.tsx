export default function About() {
  return (
    <main className="p-4 space-y-6">
      <h1 className="font-bold text-3xl">About</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">프로젝트 소개</h2>
        <p className="text-gray-700 leading-relaxed">
          "0에서 1까지"는 웹 개발의 기초부터 실전까지 단계별로 학습할 수 있는
          포트폴리오 웹사이트 워크숍 프로젝트입니다. CSS 레이아웃 기법, Next.js
          라우팅, 컴포넌트 설계 등 실무에 필요한 핵심 기술들을 실습할 수
          있습니다.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">기술 스택</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium">Frontend</h3>
            <ul className="text-sm space-y-1">
              <li>• Next.js 15.5.6</li>
              <li>• React 19.1.0</li>
              <li>• TypeScript 5</li>
              <li>• Tailwind CSS 4</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Tools</h3>
            <ul className="text-sm space-y-1">
              <li>• Biome (Linting)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">시작하기</h2>
        <div className="bg-zinc-800 text-green-400 p-3 rounded text-sm font-mono">
          <div>npm install</div>
          <div>npm run dev</div>
        </div>
      </section>
    </main>
  );
}
