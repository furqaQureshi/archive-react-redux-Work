import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Dialer Redux States
import {
  GET_DIALERS,
  ADD_DIALER,
  DELETE_DIALER,
  UPDATE_DIALER,
  GET_ONE_DIALER,
} from "./actionTypes";
import {
  getDialersSuccess,
  addDialerSuccess,
  getDialerOneSuccess,
  deletedDialerSuccess,
} from "./actions";

import { apiError } from "../auth/login/actions";

import {
  getDialersList,
  addDialerToDB,
  deleteDialerFromDB,
  updateDialerInDB,
  getOneDialerDetails,
} from "../../helpers/backend_helper";

function* getDialerOne(data) {
  try {
    const response = yield call(getOneDialerDetails, data.payload);
    if (response.status) {
      yield put(getDialerOneSuccess(response.result));
    } else {
      yield put(apiError(response.message));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}
function* getDialers() {
  try {
    yield put(addDialerSuccess(false));
    const response = yield call(getDialersList);

    if (response.status) {
      yield put(getDialersSuccess(response.result));
    } else {
      yield put(apiError(response.message));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* deleteDialer(data) {
  try {
    yield put(deletedDialerSuccess(false));
    const response = yield call(deleteDialerFromDB, {
      _id: data.payload,
    });

    if (response.status) {
      yield put(deletedDialerSuccess(true));
    } else {
      yield put(apiError(response.message));
    }
  } catch (error) {
    yield put(apiError(error));
    yield put(deletedDialerSuccess(false));
  }
}
function* addDialer(data) {
  try {
    yield put(addDialerSuccess(false));
    const response = yield call(addDialerToDB, data.payload);

    if (response.status) {
      yield put(addDialerSuccess(true));
    } else {
      yield put(apiError(response.message));
      yield put(addDialerSuccess(false));
    }
  } catch (error) {
    yield put(apiError(error));
    yield put(addDialerSuccess(false));
  }
}

function* updateDialer(data) {
  try {
    yield put(addDialerSuccess(false));
    const response = yield call(updateDialerInDB, data.payload);

    if (response.status) {
      yield put(addDialerSuccess(true));
    } else {
      yield put(apiError(response.message));
      yield put(addDialerSuccess(false));
    }
  } catch (error) {
    yield put(apiError(error));
    yield put(addDialerSuccess(false));
  }
}

function* dialerSaga() {
  yield takeEvery(GET_DIALERS, getDialers);
  yield takeEvery(ADD_DIALER, addDialer);
  yield takeEvery(DELETE_DIALER, deleteDialer);
  yield takeEvery(UPDATE_DIALER, updateDialer);
  yield takeEvery(GET_ONE_DIALER, getDialerOne);
}

export default dialerSaga;
