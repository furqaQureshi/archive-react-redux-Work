import { all, fork } from "redux-saga/effects"

//public
import AuthSaga from "./auth/login/saga"
import DialerSaga from "./dialers/saga"
import ServerSaga from "./servers/saga"
import LayoutSaga from "./layout/saga"
import ChangeSaga from "./changepassword/saga"
import viewSaga from './viewProfile/saga';
import UserSaga from './Users/saga';


export default function* rootSaga() {
  yield all([
    //public
    fork(AuthSaga),
    fork(LayoutSaga),
    fork(DialerSaga),
    fork(ServerSaga),
    fork(viewSaga),
    fork(ChangeSaga),
    fork(UserSaga)
  ])
}
