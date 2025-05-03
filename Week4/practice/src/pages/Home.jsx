import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="px-10 flex flex-col h-screen justify-center">
      <h1 className="font-semibold text-4xl">포켓몬 도감</h1>
      <div className="flex gap-4 text-blue-800">
        <Link to="/pokemon/피카츄">피카츄</Link>
        <Link to="/pokemon/이상해씨">이상해씨</Link>
      </div>
    </div>
  );
}
