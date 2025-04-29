import { useState } from "react";

export default function Header() {
  const [isGithub, setIsGithub] = useState(false);
  const [isGame, setIsGame] = useState(false);

  const activeBtnStyle = "bg-dark rounded-lg";
  const defaultBtnStyle = "px-4 py-2 cursor-pointer";

  const handleGithub = () => {
    setIsGame(false);
    setIsGithub(true);
  };

  const handleGame = () => {
    setIsGithub(false);
    setIsGame(true);
  };

  return (
    <header className="h-34 py-7 bg-primary flex flex-col items-center gap-4 text-white">
      <h1 className="text-2xl">⚾️ 숫자야구 || 깃허브 검색 😸</h1>
      <div className="flex gap-7 text-sm">
        <button
          onClick={handleGithub}
          className={`${defaultBtnStyle} ${isGithub ? activeBtnStyle : ""}`}
        >
          깃허브 검색 🔍
        </button>
        <button
          onClick={handleGame}
          className={`${defaultBtnStyle} ${isGame ? activeBtnStyle : ""}`}
        >
          숫자 야구 ⚾️
        </button>
      </div>
    </header>
  );
}
