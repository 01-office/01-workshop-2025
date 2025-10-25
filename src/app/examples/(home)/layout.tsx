import Link from "next/link";

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-10">
        <nav className="flex gap-4 px-4 py-2 bg-zinc-100">
          <Link href="/examples/default-layout" className="hover:underline">
            Default Layout
          </Link>
          <Link href="/examples/sticky-footer" className="hover:underline">
            Sticky Footer
          </Link>
          <Link href="/examples/image" className="hover:underline">
            Image
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
}
