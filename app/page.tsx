import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/test" className="text-primary">
        Test
      </Link>
    </main>
  );
}
