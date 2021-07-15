import axios from "axios";
import { useHistory } from "react-router-dom";

import { getItem, removeItem } from "../utils/LocalStorageUtils";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_token";
const ACCESS_TOKEN_NAME = "Authorization";

export const methodType = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};

export const requestApiWithBodyWithoutToken = async (
  method,
  url,
  body,
  header
) => {
  try {
    const res = await axios[method](BASE_URL + url, body, {
      headers: {
        ...header,
      },
    });

    return res;
  } catch (error) {
    throw error.response;
  }
};

export const requestApiWithoutBodyWithoutToken = async (
  method,
  url,
  header
) => {
  try {
    const res = await axios[method](BASE_URL + url, {
      headers: {
        ...header,
      },
    });

    return res;
  } catch (error) {
    throw error.response;
  }
};

export const requestApiWithoutBodyWithToken = async (method, url, header) => {
  try {
    const accessToken = getItem(ACCESS_TOKEN);
    /* const accessToken =
      "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTg5MjYwOTcsImV4cCI6MTYxODkyNzg5NzAwMCwic3ViIjoiZGtzc3VkOTU1NiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.lEWjXbw9flDOhgTb6f0VKBUoVhrO5PSPtzVjs_j9hws";
    */
    /* const accessToken = // admin token
      "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjYyNzEwMzgsImV4cCI6MTYyNjI3MjgzOCwic3ViIjoidGVzdEFkbWluIiwidHlwZSI6ImFjY2Vzc190b2tlbiJ9.qA61pZXn4DIt53My0mpNdQffJPNY0Ed1rBSr_r4-qiM";
 */
    console.log(accessToken);
    const res = await axios[method](BASE_URL + url, {
      headers: {
        [ACCESS_TOKEN_NAME]: "Bearer " + accessToken,
        ...header,
      },
    });

    return res;
  } catch (error) {
    throw error.response;
  }
};

export const requestApiWithBodyWithToken = async (
  method,
  url,
  body,
  header
) => {
  try {
    const accessToken = getItem(ACCESS_TOKEN);

    /* const accessToken = // user token
      "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTg5MjYwOTcsImV4cCI6MTYxODkyNzg5NzAwMCwic3ViIjoiZGtzc3VkOTU1NiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.lEWjXbw9flDOhgTb6f0VKBUoVhrO5PSPtzVjs_j9hws";
 */
    /* const accessToken = // admin token
      "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjYyNjA1MTAsImV4cCI6MTYyNjI2MjMxMCwic3ViIjoidGVzdEFkbWluIiwidHlwZSI6ImFjY2Vzc190b2tlbiJ9.KC0C0swt9zbBI7FoMYeGeYZiLg-DR_xUiG77aJXmmoE";
 */
    const res = await axios[method](BASE_URL + url, body, {
      headers: {
        [ACCESS_TOKEN_NAME]: "Bearer " + accessToken,
        ...header,
      },
    });

    return res;
  } catch (error) {
    throw error.response;
  }
};

export function useRefresh() {
  try {
    const res = axios({
      method: PATCH,
      url: BASE_URL + "/auth",
      headers: {
        "x-refresh-token": getItem(REFRESH_TOKEN),
      },
    });
    setItem(REFRESH_TOKEN, res.data.access_token);
  } catch (e) {
    removeItem(ACCESS_TOKEN);
    removeItem(REFRESH_TOKEN);
  }
}
