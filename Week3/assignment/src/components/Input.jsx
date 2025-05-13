import {
  GITHUB_PLACEHOLDER,
  GAME_PLACEHOLDER,
  DEFAULT_PLACEHOLDER,
} from "../constants/placeholder";

export default function Input({ activeTab, onChange, onKeyDown }) {
  const placeholder =
    activeTab === "github"
      ? GITHUB_PLACEHOLDER
      : activeTab === "game"
      ? GAME_PLACEHOLDER
      : DEFAULT_PLACEHOLDER;

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="w-full p-4 bg-primary/20 border-2 border-primary rounded-2xl text-sm focus:outline-0"
    />
  );
}
