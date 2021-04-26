import { useState } from "react";

export const usePasswordModal = () => {
  const [passwordInfo, setPasswordInfo] = useState({
    nowPassword: "",
    newPassword: "",
    reEnterPassword: "",
  });

  const changePasswordInfo = (e) => {
    const { name, value } = e.target;

    setPasswordInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    passwordInfo,
    setPasswordInfo,
    changePasswordInfo,
  };
};
