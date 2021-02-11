import React, { useCallback, useState } from "react";
import ProfileInfo from "../../../../component/MyPage/MyPageProfile/ProfileInfo/ProfileInfo";

const MyPageInfoContainer = () => {
  const TEMP_DATA = {
    name: "유시온",
    student_num: "3415",
    field: "프론트엔드",
    username: "cutyapple123",
  };

  const [studentNum, setStudentNum] = useState(TEMP_DATA.student_num);
  const onChangeStdNum = useCallback((e) => {
    setStudentNum(e.target.value);
  }, []);
  const studentNumManage = { studentNum, onChangeStdNum };

  return <ProfileInfo {...TEMP_DATA} studentNumManage={studentNumManage} />;
};

export default MyPageInfoContainer;
