import { useEffect, useState } from "react";
import { getUserInfo } from "../../api/apiRequest";
import { GITHUB_MESSAGES } from "../../constants/message";
import Card from "../Card";

export default function GithubSection({ userId, isCardOpen, closeCard }) {
  const [userInfo, setUserInfo] = useState({ status: "idle", data: null });

  const messageStyle = "py-3 text-primary font-semibold";

  useEffect(() => {
    if (!userId) return;
    getUserInfo(userId).then(setUserInfo);
  }, [userId]);

  if (userInfo.status === "idle") return null;
  if (userInfo.status === "pending")
    return <p className={messageStyle}>{GITHUB_MESSAGES.pending}</p>;
  if (userInfo.status === "rejected")
    return <p className={messageStyle}>{GITHUB_MESSAGES.rejected}</p>;

  return (
    <>
      {isCardOpen && userInfo.data && (
        <Card userData={userInfo.data} close={closeCard} />
      )}
    </>
  );
}
