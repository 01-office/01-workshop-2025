import { libraries } from "./_data";

function LibrarySection({ library }: { library: (typeof libraries)[0] }) {
  return (
    <section>
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-3xl font-bold">{library.name}</h2>
          {library.badge && (
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 font-medium">
              {library.badge}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {library.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed mb-8 text-lg">
        {library.description}
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className={`font-semibold text-lg mb-4 ${library.color.title}`}>
            ✨ 왜 좋은가요?
          </h3>
          <ul className="space-y-2 text-gray-700">
            {library.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">📦 설치하기</h3>
            <pre className="rounded-lg bg-neutral-900 text-gray-100 p-4 text-sm overflow-x-auto">
              <code>{library.installCommand}</code>
            </pre>
            {library.installNote && (
              <p
                className={`text-sm mt-2 ${
                  library.installNote.includes("⚠️")
                    ? "text-orange-700"
                    : "text-gray-600"
                }`}
              >
                {library.installNote}
              </p>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">💻 사용 예시</h3>
            <pre className="rounded-lg bg-neutral-900 text-gray-100 p-4 text-sm overflow-x-auto">
              <code>{library.exampleCode}</code>
            </pre>
          </div>
        </div>
      </div>

      <a
        href={library.docUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 ${library.color.primary} ${library.color.hover} font-medium`}
      >
        공식 문서 보기 →
      </a>
    </section>
  );
}

export default function PackagesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">주요 라이브러리 소개</h1>
        <p className="text-gray-600 text-lg">
          웹 개발에 유용한 라이브러리들을 소개합니다. 각 라이브러리의 특징과
          사용법을 확인해보세요.
        </p>
      </div>

      <div className="space-y-20">
        {libraries.map((library) => (
          <LibrarySection key={library.name} library={library} />
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold mb-8 text-center">
          라이브러리 한눈에 보기
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraries.map((library) => (
            <div key={library.name} className="p-4">
              <div
                className={`font-bold mb-1 text-lg ${library.color.primary}`}
              >
                {library.name}
              </div>
              <div className="text-gray-600">{library.summary}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
