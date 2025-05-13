import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import IdForm from "@/components/signup/IdForm";
import PwForm from "@/components/signup/PwForm";
import NicknameForm from "@/components/signup/NicknameForm";
import SignupLayout from "@/components/signup/SignupLayout";
import routePath from "@/routes/routePath";
import { signup } from "@/apis/apiRequest";

export default function SignupPage() {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);

  const navigate = useNavigate();

  const handleSignup = async () => {
    const loginId = localStorage.getItem("signupId");
    const password = localStorage.getItem("signupPw");
    const nickname = localStorage.getItem("signupNickname");

    try {
      await signup({
        loginId: loginId ?? "",
        password: password ?? "",
        nickname: nickname ?? "",
      });
      alert("회원가입에 성공하셨습니다 ㅊㅊ");
      navigate(routePath.LOGIN);
    } catch (err) {
      alert((err as any).response?.data?.message || "에러 발생");
    } finally {
      localStorage.removeItem("signupId");
      localStorage.removeItem("signupPw");
      localStorage.removeItem("signupNickname");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <IdForm onNext={handleNext} />;
      case 2:
        return <PwForm onNext={handleNext} />;
      case 3:
        return <NicknameForm onSubmit={handleSignup} />;
    }
  };

  return <SignupLayout title="회원가입">{renderStep()}</SignupLayout>;
}
