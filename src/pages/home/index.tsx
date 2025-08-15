import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col gap-5 bg-gray-100 flex-1 justify-center items-center">
      <div className="container mx-auto px-5">Home</div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
    </main>
  );
}
