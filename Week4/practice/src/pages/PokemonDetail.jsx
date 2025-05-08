import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PokemonDetail() {
  const { name } = useParams();

  return (
    <div className="py-40 px-10 flex flex-col gap-7">
      <Link className="text-blue-800" to="/">
        🔙 목록으로
      </Link>
      <h1 className="font-semibold text-4xl">{name}</h1>
      <p>상세정보 ...</p>
    </div>
  );
}
