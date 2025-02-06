'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Cifraclub v2</h1>
      <button onClick={() => router.push("/new")}>Add new song</button>
    </div>
  );
}
