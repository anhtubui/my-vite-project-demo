import CatTable from "@/component/CatTable";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <section className="flex flex-col gap-4 px-5">
        <CatTable />
      </section>
    </div>
  );
}
