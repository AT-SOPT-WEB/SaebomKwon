export default function List({ results }) {
  return (
    <ul className="w-full flex flex-col items-center gap-2">
      {results.map((result, idx) => (
        <li
          key={idx}
          className="w-2/3 p-4 border-2 border-primary rounded-2xl text-center"
        >
          {result}
        </li>
      ))}
    </ul>
  );
}
