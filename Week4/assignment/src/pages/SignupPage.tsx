import { useState } from "react";
import IdForm from "@/components/signup/IdForm";
import PwForm from "@/components/signup/PwForm";
import NicknameForm from "@/components/signup/NicknameForm";
import SignupLayout from "@/components/signup/SignupLayout";

export default function SignupPage() {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <IdForm onNext={handleNext} />;
      case 2:
        return <PwForm onNext={handleNext} />;
      case 3:
        return <NicknameForm />;
    }
  };

  return <SignupLayout title="회원가입">{renderStep()}</SignupLayout>;
}
