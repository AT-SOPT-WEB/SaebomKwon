import axiosInstance from "@/apis/axiosInstance";

type LoginType = {
  loginId: string;
  password: string;
};

export const login = async ({ loginId, password }: LoginType) => {
  const res = await axiosInstance.post("/api/v1/auth/signin", {
    loginId,
    password,
  });

  return res.data;
};
