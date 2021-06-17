import axios from "axios";

import { getItem } from "../utils/LocalStorageUtils";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
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
    // const accessToken = getItem(ACCESS_TOKEN)
    // const accessToken = // user token
    //   "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTg5MjYwOTcsImV4cCI6MTYxODkyNzg5NzAwMCwic3ViIjoiZGtzc3VkOTU1NiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.lEWjXbw9flDOhgTb6f0VKBUoVhrO5PSPtzVjs_j9hws";
    const accessToken = // admin token
      "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTg5MjYwOTcsImV4cCI6MTYxODkyNzg5NzAwMCwic3ViIjoiYWRtaW5qamFuZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.WfnwQSPiApP03Ypebez6hyK6SPhawNhfsirGHTtSjUk";

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
    // const accessToken = // user token
    //   "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTg5MjYwOTcsImV4cCI6MTYxODkyNzg5NzAwMCwic3ViIjoiZGtzc3VkOTU1NiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.lEWjXbw9flDOhgTb6f0VKBUoVhrO5PSPtzVjs_j9hws";
    const accessToken = // admin token
      "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTg5MjYwOTcsImV4cCI6MTYxODkyNzg5NzAwMCwic3ViIjoiYWRtaW5qamFuZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.WfnwQSPiApP03Ypebez6hyK6SPhawNhfsirGHTtSjUk";

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
