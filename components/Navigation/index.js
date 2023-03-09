import Link from "next/link";

export default function NavPage() {
  return (
    <>
      <p>
        <Link href="/art-pieces">Pieces</Link>
      </p>
      <p>
        <Link href="/">Spotlight</Link>
      </p>
    </>
  );
}
