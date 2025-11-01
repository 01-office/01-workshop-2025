import Link from "next/link";
import { notFound } from "next/navigation";
import { PORTFOLIOS } from "../_data";

interface SlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const portfolio = PORTFOLIOS.find((p) => p.id === Number(slug));

  if (!portfolio) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link
        href="/examples/slug"
        className="inline-block mb-8 text-sm text-black/60 hover:text-black transition-colors"
      >
        ← 목록으로
      </Link>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-black">{portfolio.title}</h1>
          <span className="text-lg text-black/50">{portfolio.year}</span>
        </div>
      </div>
      <p className="text-black/80 leading-relaxed">{portfolio.description}</p>
    </div>
  );
}
