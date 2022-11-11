import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Dialer from "./dialers/reducer"
import Server from "./servers/reducer"
import View from "./viewProfile/reducer"
import Change from "./changepassword/reducer";
import Users from './Users/Reducer'

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Dialer,
  Server,
  View,
  Change,
  Users
})

export default rootReducer
