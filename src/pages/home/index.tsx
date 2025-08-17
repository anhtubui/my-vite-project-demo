import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center gap-5 bg-gray-100">
      <div className="container mx-auto px-5">Home</div>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
    </main>
  );
}
