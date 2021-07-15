import { useDispatch } from "react-redux";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { useRefresh } from "../../../lib/requestApi";
import { homeworkApi, adminApi } from "../../../lib/Api";
import {
  requestApiWithoutBodyWithToken,
  requestApiWithBodyWithToken,
  methodType,
} from "../../../lib/requestApi";

import { homeworkActions } from "../../action/homework/index";

function* getHomeworkList() {
  try {
    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = homeworkApi.getHomeworkList();

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    const { GET_HOMEWORK_LIST } = homeworkActions;

    yield put({
      type: GET_HOMEWORK_LIST,
      payload: res.data,
    });

    console.log(`리스트 받아옴`);
  } catch (error) {
    console.log(error);
  }
}

function* gethomeworkContent(action) {
  try {
    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = homeworkApi.getHomeworkContent(action.payload);

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    const { GET_HOMEWORK_CONTENT, IS_LOADING } = homeworkActions;

    yield put({
      type: GET_HOMEWORK_CONTENT,
      payload: res.data,
    });
    yield put({
      type: IS_LOADING,
      payload: false,
    });

    console.log(`content받아옴`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

function* returnHomework(action) {
  console.log(action.payload);
  const { content, id, files } = action.payload;
  console.log(files);
  try {
    const HTTP_METHOD = methodType.PUT;
    const REQUEST_URL = homeworkApi.returnHomework(id);
    const REQUEST_BODY = { content, files };

    const res = yield call(
      requestApiWithBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL,
      REQUEST_BODY
    );

    console.log(`숙제 재출 완료`);
  } catch (error) {
    console.log(error);
  }
}

function* assignmentHomework(action) {
  console.log(action.payload);
  const { date, time, content, title, usernames } = action.payload;
  console.log(usernames);
  const deadline = `${date}T${time}`;
  try {
    const HTTP_METHOD = methodType.POST;
    const REQUEST_URL = homeworkApi.assignmentHomework();
    const REQUEST_BODY = { title, content, deadline, usernames };

    const res = yield call(
      requestApiWithBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL,
      REQUEST_BODY
    );
    alert(`생성 성공`);
    window.location.href = "/homeworkAdmin";
  } catch (error) {
    console.log(error);
  }
}

function* getUserList() {
  try {
    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = adminApi.getUserList();

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    const { GET_USER_LIST } = homeworkActions;

    yield put({
      type: GET_USER_LIST,
      payload: res.data,
    });

    console.log(`받아옴`);
  } catch (error) {
    console.log(error);
  }
}

function* getAdminHomeworkList() {
  try {
    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = homeworkApi.getAdminHomeworkList();

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    const { GET_ADMIN_HOMEWORK_LIST } = homeworkActions;

    yield put({
      type: GET_ADMIN_HOMEWORK_LIST,
      payload: res.data,
    });

    console.log(`리스트 받아옴`);
  } catch (error) {
    console.log(error);
    const refreshHandler = useRefresh();

    switch (error.status) {
      case 410:
        refreshHandler().then(() => {
          getAdminHomeworkList();
        });
        break;
      default:
    }
  }
}

function* getAdminHomeworkContent(action) {
  const { Username, Id } = action.payload;
  try {
    const HTTP_METHOD = methodType.GET;
    const REQUEST_URL = homeworkApi.getAdminHomeworkContent(Username, Id);

    const res = yield call(
      requestApiWithoutBodyWithToken,
      HTTP_METHOD,
      REQUEST_URL
    );

    const { GET_ADMIN_HOMEWORK_CONTENT } = homeworkActions;

    yield put({
      type: GET_ADMIN_HOMEWORK_CONTENT,
      payload: res.data,
    });
    console.log(`conetnd 받아옴`);
  } catch (error) {
    console.log(error);
    switch (error.status) {
      case 410:
        break;
      default:
    }
  }
}

function* homeworkSaga() {
  const {
    GET_HOMEWORK_LIST_SAGA,
    GET_HOMEWORK_CONTENT_SAGA,
    RETURN_HOMEWORK_SAGA,
    ASSIGNMENT_HOMEWORK_SAGA,
    GET_USER_LIST_SAGA,
    GET_ADMIN_HOMEWORK_LIST_SAGA,
    GET_ADMIN_HOMEWORK_CONTENT_SAGA,
  } = homeworkActions;

  yield takeLatest(GET_HOMEWORK_LIST_SAGA, getHomeworkList);
  yield takeLatest(GET_HOMEWORK_CONTENT_SAGA, gethomeworkContent);
  yield takeLatest(RETURN_HOMEWORK_SAGA, returnHomework);
  yield takeLatest(ASSIGNMENT_HOMEWORK_SAGA, assignmentHomework);
  yield takeLatest(GET_USER_LIST_SAGA, getUserList);
  yield takeLatest(GET_ADMIN_HOMEWORK_LIST_SAGA, getAdminHomeworkList);
  yield takeLatest(GET_ADMIN_HOMEWORK_CONTENT_SAGA, getAdminHomeworkContent);
}

export default homeworkSaga;
