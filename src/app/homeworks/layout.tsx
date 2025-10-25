import Link from "next/link";

export default function HomeworksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="">
        <nav className="flex gap-4 px-4 py-2 bg-zinc-100">
          <Link href="/homeworks/week-1" className="hover:underline">
            Week 1
          </Link>
          <Link href="/homeworks" className="line-through">
            Week 2
          </Link>
          <Link href="/homeworks" className="line-through">
            Week 3
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
}
