import CatTable from "@/component/CatTable";

export default function Dashboard() {
  return (
    <div className="flex min-w-0 flex-grow flex-col gap-4 px-5 py-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <section className="flex flex-col gap-4">
        <CatTable />
      </section>
    </div>
  );
}
