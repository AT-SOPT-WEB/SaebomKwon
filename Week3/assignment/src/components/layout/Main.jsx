import Input from "../Input";

export default function Main({ activeTab }) {
  const placeholder =
    activeTab === "github"
      ? "Github 프로필을 검색해보세요."
      : activeTab === "game"
      ? "3자리 숫자를 입력해주세요."
      : "깃허브 검색 or 숫자 야구 버튼을 클릭해주세요!";

  return (
    <main className="flex justify-center py-80">
      <Input placeholder={placeholder} />
    </main>
  );
}
