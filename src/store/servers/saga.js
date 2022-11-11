import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Server Redux States
import { GET_SERVERS, ADD_SERVER, DELETE_SERVER, UPDATE_SERVER, GET_ONE_SERVER, UPDATE_SERVER_STATUS } from "./actionTypes"
import {  getServersSuccess, deletedServerSuccess, addServerSuccess, getServerOneSuccess, updateServerStatusSuccess } from "./actions"
import { apiError } from "../auth/login/actions"

import {
	getServersList,
	addServerToDB,
	deleteServerFromDB,
	updateServerInDB,
	getOneServerDetails,
	updateServerStatusInDB
} from "../../helpers/backend_helper"

function* getServers () {
	try {
		yield put(addServerSuccess(false))
		const response = yield call(getServersList)
		if (response.status) {
			yield put(getServersSuccess(response.result))
		} else {
			yield put(apiError(response.message))
		}
	} catch (error) {
		yield put(apiError(error))
	}
}

function* getServerOne (data) {
	try {
		const response = yield call(getOneServerDetails, data.payload) 

		if (response.status) {
			yield put(getServerOneSuccess(response.result))
		} else {
			yield put(apiError(response.message))

		}
	} catch (error) {
		yield put(apiError(error))
	}
}

function* deleteServer (data) {
	try {
		yield put(deletedServerSuccess(false))
		const response = yield call(deleteServerFromDB, {
			_id: data.payload
		})

		if (response.status) {
			yield put(deletedServerSuccess(true))
		} else {
			yield put(apiError(response.message))
		}
	} catch (error) {
		yield put(apiError(error))
	}
}

function* addServer (data) {
	try {
		yield put(addServerSuccess(false))
		const response = yield call(addServerToDB, data.payload) 
		if (response.status) {
			//localStorage.setItem("authUser", JSON.stringify(response.res))
			yield put(addServerSuccess(true))
		} else {
			yield put(apiError(response.message))
			yield put(addServerSuccess(false))

		}
	} catch (error) {
		yield put(apiError(error))
		yield put(addServerSuccess(false))

	}
}

function* updateServer (data) {
	try {
		yield put(addServerSuccess(false))
		const response = yield call(updateServerInDB, data.payload) 

		if (response.status) {
			yield put(addServerSuccess(true))
		} else {
			yield put(apiError(response.message))
			yield put(addServerSuccess(false))
		}
	} catch (error) {
		yield put(apiError(error))
		yield put(addServerSuccess(false))
	}
}

function* updateServerStatus (data) {
	try {
		yield put(updateServerStatusSuccess(false))
		const response = yield call(updateServerInDB, data.payload) 

		if (response.status) {
			console.log(data);
			yield put(updateServerStatusSuccess(true))
		} else {
			yield put(apiError(response.message))
			yield put(updateServerStatusSuccess(false))
		}
	} catch (error) {
		yield put(apiError(error))
		yield put(updateServerStatusSuccess(false))
	}
}


function* serverSaga() {
	yield takeEvery(GET_SERVERS, getServers)
	yield takeEvery(ADD_SERVER, addServer)
	yield takeEvery(DELETE_SERVER, deleteServer)
	yield takeEvery(UPDATE_SERVER, updateServer)
	yield takeEvery(GET_ONE_SERVER, getServerOne)
}

export default serverSaga
