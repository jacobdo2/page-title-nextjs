import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/somePage">
        <a>Some Page</a>
      </Link>
    </nav>
  );
}
