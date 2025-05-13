import axiosInstance from "@/apis/axiosInstance";

type LoginType = {
  loginId: string;
  password: string;
};

type SignupType = {
  loginId: string;
  password: string;
  nickname: string;
};

export const login = async ({ loginId, password }: LoginType) => {
  const res = await axiosInstance.post("/api/v1/auth/signin", {
    loginId,
    password,
  });

  return res.data;
};

export const signup = async ({ loginId, password, nickname }: SignupType) => {
  const res = await axiosInstance.post("/api/v1/auth/signup", {
    loginId,
    password,
    nickname,
  });

  return res.data;
};
