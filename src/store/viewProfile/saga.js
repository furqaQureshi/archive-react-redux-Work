import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { UPDATE_PROFILE } from "./Types";
import { successProfile, userProfiles } from "./Action";

import { apiError } from "../auth/login/actions";

import { updateUserProfile} from "../../helpers/backend_helper";

function* updateUser(name) {
  try {	
		yield put(successProfile(false))
		const response = yield call(updateUserProfile, name.payload) 
		if (response.status) {
			console.log(name.payload,"222222222222");
			yield put(successProfile(false))
		} else {
			yield put(apiError(response.message))
			yield put(successProfile(true))
		}
	} catch (error) {
		yield put(apiError(error))
		yield put(successProfile(false))
	}
}

function* viewSaga() {
  yield takeEvery(UPDATE_PROFILE, updateUser);
}

export default viewSaga;
