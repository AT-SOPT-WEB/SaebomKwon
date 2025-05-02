export default function RecentUser({ userId, removeRecentUser }) {
  return (
    <div className="px-3 py-1 border-1 border-primary rounded-full flex gap-2">
      <p>{userId}</p>
      <button
        onClick={removeRecentUser}
        className="text-sm font-semibold cursor-pointer"
      >
        x
      </button>
    </div>
  );
}
