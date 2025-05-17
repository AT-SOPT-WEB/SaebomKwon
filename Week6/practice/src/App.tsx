import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const userId = 100;

const getMyNickname = async (userId: number) => {
  const response = await axios.get(
    "https://api.atsopt-seminar4.site/api/v1/users/me",
    {
      headers: {
        userId: userId,
      },
    }
  );
  return response.data.data;
};

const updateNickname = async (newNickname: string) => {
  const response = await axios.patch(
    "https://api.atsopt-seminar4.site/api/v1/users",
    { nickname: newNickname },
    {
      headers: {
        userId: userId,
      },
    }
  );
  return response.data.data;
};

function App() {
  const [newNickname, setNewNickname] = useState("");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myNickname", userId],
    queryFn: () => getMyNickname(userId),
  });

  const { mutate } = useMutation({
    mutationFn: (newNickname: string) => updateNickname(newNickname),
    onSuccess(data) {
      console.log(data);
      refetch();
    },
    onError(err) {
      console.log(err);
    },
  });

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div>
      내 정보:
      {data && <span> {data.nickname}</span>}
      <input type="text" onChange={(e) => setNewNickname(e.target.value)} />
      <button onClick={() => mutate(newNickname)}>닉네임 수정</button>
    </div>
  );
}

export default App;
