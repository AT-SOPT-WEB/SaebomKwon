import InputSection from "../section/InputSection";

export default function Main({ activeTab }) {
  return (
    <main className="w-2/3 pt-20 m-auto gap-4 text-center">
      <InputSection activeTab={activeTab} />
    </main>
  );
}
