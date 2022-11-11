import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { apiError } from "../auth/login/actions";

import {
  ADD_USER,
  DELETE_USER,
  GET_USER,
  UPDATE_USER,
} from "./Types";
import {
  addUserSuccess,
  deletedUserSuccess,
  deleteUserSuccess,
  getUserSuccess,
  updateUserStatusSuccess,
  // deletedUserSuccess,
} from "../Users/Action";
import {
  addUserToLS,
  deleteuserDl,
  getUserList,
  updateUserUL,
} from "../../helpers/backend_helper";

// get user
function* getUser() {
  try {
    yield put(addUserSuccess(false))
    // console.log(response.status);
		const response = yield call(getUserList )
		if (response.status) {
			yield put(getUserSuccess(response.result))
		} else {
			yield put(apiError(response.message))
		}
	} catch (error) {
		yield put(apiError(error))
  }
}

// add user
function* addUser(data) {
  try {
    yield put(addUserSuccess(false))
		const response = yield call(addUserToLS, data.payload) 
		if (response.status) {
			yield put(addUserSuccess(true))
		} else {
      yield put(apiError(response.message))
			yield put(addUserSuccess(false))
		}
	} catch (error) {
		yield put(apiError(error))
		yield put(addUserSuccess(false))
  }
}
// delete user
function* deleteUser(data) {
  try {
    yield put(deleteUserSuccess(false));
    const response = yield call(deleteuserDl, {
      _id: data.payload,
    })
    if (response.status) {
      yield put(deleteUserSuccess(true));
    } else {
      yield put(apiError(response.message));
    }
  } catch (error) {
    yield put(apiError(error));
    yield put(deleteUserSuccess(false));
  }
}

// update user
function* updateUser(data) {
  try {
    yield put(addUserSuccess(false));
    const response = yield call(updateUserUL, data.payload);
    if (response.status) {
      yield put(addUserSuccess(true));
    } else {
      yield put(apiError(response.message));
      yield put(addUserSuccess(false));
    }
  } catch (error) {
    yield put(apiError(error));
    yield put(addUserSuccess(false));
  }
}

function* updateUserStatus (data) {
	try {
		yield put(updateUserStatusSuccess(false))
		const response = yield call(updateUserUL, data.payload) 

		if (response.status) {
			yield put(updateUserStatusSuccess(true))
		} else {
			yield put(apiError(response.message))
			yield put(updateUserStatusSuccess(false))
		}
	} catch (error) {
		yield put(apiError(error))
		yield put(updateUserStatusSuccess(false))
	}
}


function* userSaga() {
  yield takeEvery(GET_USER, getUser);
  yield takeEvery(ADD_USER, addUser);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeEvery(UPDATE_USER, updateUser);
  // yield takeEvery(GET_USER_ONE, getUserOne);
}

export default userSaga;
// react saga me yield aik Bulit-in functuion hai joo ap ko generater ke function sequentially
// istemal kerne ki ijazat deta hai javascript me istamel hune per genretor ke function
// nested function se tamam values ko wapis kerne ki ijazat deta hai
