import axios from "axios";

const BASE_URL = "";

const ACCESS_TOKEN_NAME = "Authorization";
const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

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
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

    const res = await axios[method](BASE_URL + url, {
      headers: {
        [ACCESS_TOKEN_NAME]: accessToken,
        ...header,
      },
    });

    console.log(res);

    return res;
  } catch (error) {
    console.log(error.response);

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
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

    const res = await axios[method](BASE_URL + url, body, {
      headers: {
        [ACCESS_TOKEN_NAME]: accessToken,
        ...header,
      },
    });

    return res;
  } catch (error) {
    console.log(error.response);

    throw error.response;
  }
};