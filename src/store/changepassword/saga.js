import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

import { OLD_PASSWORD , } from './Types';
import { changeSuccess } from "./actions";

import { apiError } from "../auth/login/actions"

import {
	getOneuser
} from "../../helpers/backend_helper"


function* oldPassword (password) {
	try {	
		yield put(changeSuccess(false))
		const response = yield call(getOneuser, password.payload) 
		if (response.status) {
			yield put(changeSuccess(true))
		} else {
			yield put(apiError(response.message))
			yield put(changeSuccess(false))
		}
	} catch (error) {
		yield put(apiError(error))
		yield put(changeSuccess(false))
	}
}

function* ChangeSaga() {
	yield takeEvery(OLD_PASSWORD, oldPassword)
}

export default ChangeSaga
