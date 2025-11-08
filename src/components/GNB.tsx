import Link from "next/link";

export default function GNB() {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="flex gap-4 px-4 py-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/homeworks">Homeworks</Link>
        <Link href="/examples">Examples</Link>
        <Link href="/packages">Packages</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
