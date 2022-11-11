import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { 
	LOGIN_USER, 
	LOGOUT_USER, 
	SOCIAL_LOGIN, 
} from "./actionTypes"
import { 
	apiError, 
	loginSuccess, 
	logoutUserSuccess, 
} from "./actions"

import {
	postLogin,
} from "../../../helpers/backend_helper"


function* loginUser({ payload: { user, history } }) {

	try {
		const response = yield call(postLogin, {
			email: user.email,
			password: user.password,
		})
		if (response.status) {
			localStorage.setItem("authUser", JSON.stringify(response.data))
			yield put(loginSuccess(response.data))
			history.push("/dashboard")
		} else {
			yield put(apiError(response.message))
		}
	} catch (error) {
		yield put(apiError(error))
	}
}

function* logoutUser({ payload: { history } }) {
	try {
		localStorage.removeItem("authUser")
		history.push("/login")
	} catch (error) {
		yield put(apiError(error))
	}
}

function* authSaga() {
	yield takeEvery(LOGIN_USER, loginUser)
	yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
