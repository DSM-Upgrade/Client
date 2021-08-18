import { useRefresh } from "../../../lib/requestApi";
import { getAdminHomeworkList, getUserList } from "./index";

export const errorStatus410 = async (status) => {
  if (status === 410) {
    const isRefreshSuccess = await useRefresh();
    if (isRefreshSuccess) {
      return getAdminHomeworkList();
    }
  } else {
    console.log("status :" + status);
    return;
  }
};

/* export const errorStatus410 = async (status) => {
  if (status == 410) {
    const isRefreshSuccess = await useRefresh();
    if (isRefreshSuccess) {
      getUserList();
    }
  } else {
    console.log("status :" + status);
    return;
  }
}; */
