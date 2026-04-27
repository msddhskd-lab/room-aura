import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial" }}>
      <h1>Redesign your room in 10 seconds ✨</h1>
      <p>Upload your room and get a makeover instantly</p>

      <Link href="/upload">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Try My Room
        </button>
      </Link>
    </div>
  );
}
