import InputSection from "../section/InputSection";
import GithubSection from "../section/GithubSection";
import GameSection from "../section/GameSection";

export default function Main({ activeTab }) {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      <InputSection activeTab={activeTab} />
    </main>
  );
}
