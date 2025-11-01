import Link from "next/link";
import { PORTFOLIOS } from "./_data";

export default function SlugPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-12 text-black">포트폴리오</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PORTFOLIOS.map((portfolio) => (
          <Link
            key={portfolio.id}
            href={`/examples/slug/${portfolio.id}`}
            className="block p-4 bg-black/5 hover:bg-black/10 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-lg font-semibold text-black">
                {portfolio.title}
              </h2>
              <span className="text-sm text-black/50">{portfolio.year}</span>
            </div>
            <p className="text-sm text-black/70 line-clamp-2">
              {portfolio.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
