import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <div className="mt-10">Sorry, the requested post does not exist.</div>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
