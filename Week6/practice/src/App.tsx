import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const getUsers = async () => {
  const response = await axios.get(
    "https://api.atsopt-seminar4.site/api/v1/users"
  );
  return response.data.data;
};

function App() {
  const [show, setShow] = useState(false);

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    enabled: show, // 기본적으로는 실행되지 않음
  });

  const handleClick = async () => {
    setShow(true);
    await refetch();
  };

  return (
    <>
      <button onClick={handleClick}>리스트 보기</button>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}

      {show && data && (
        <ul>
          {data.nicknameList.map((user: string, index: number) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
