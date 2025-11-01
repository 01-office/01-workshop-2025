import Link from "next/link";
import { examples } from "./_data";

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-10">
        <nav className="flex gap-4 px-4 py-2 bg-zinc-100 flex-wrap">
          {examples.map((example) => (
            <Link
              href={example.href}
              className="hover:underline"
              key={example.href}
            >
              {example.title}
            </Link>
          ))}
        </nav>
      </header>
      {children}
    </>
  );
}
