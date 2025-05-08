export default function Header({ activeTab, handleGithub, handleGame }) {
  const isGithub = activeTab === "github";
  const isGame = activeTab === "game";

  const baseBtnStyle = "px-4 py-2 cursor-pointer";
  const activeBtnStyle = "bg-dark rounded-lg";

  const getButtonStyle = (isActive) =>
    `${baseBtnStyle} ${isActive ? activeBtnStyle : ""}`;

  return (
    <header className="flex flex-col items-center gap-4 h-34 py-7 bg-primary text-white">
      <h1 className="text-2xl">⚾️ 숫자야구 || 깃허브 검색 😸</h1>
      <div className="flex gap-7 text-sm">
        <button onClick={handleGithub} className={getButtonStyle(isGithub)}>
          깃허브 검색 🔍
        </button>
        <button onClick={handleGame} className={getButtonStyle(isGame)}>
          숫자 야구 ⚾️
        </button>
      </div>
    </header>
  );
}
