import axios from "axios";
import { post, del, get, put, patch } from "./api_helper";

// Login Method
export const postLogin = (data) => post("/login", data);

export const getServersList = () => get("/server");

export const addServerToDB = (data) => post("/server/add", data);

export const deleteServerFromDB = (id) => post("/server/delete", id);

export const updateServerInDB = (data) => put("/server/update", data);

export const updateServerStatusInDB = (data) => put("/server/update", data);

// Dialer Api Start
export const getDialersList = () => get("/dialer");

export const addDialerToDB = (data) => post("/dialer/add", data);

export const deleteDialerFromDB = (id) => post("/dialer/delete", id);

export const updateDialerInDB = (data) => put("/dialer/update", data);

export const getOneServerDetails = (id) => get("/server/update/" + id);

export const getOneDialerDetails = (id) => get("/dialer/update/" + id);

// viewProfile API
export const updateUserProfile = (name) => patch("/user/updateProfile", name);

// ChangeProfile API
export const getOneuser = (password) =>
  patch("http://localhost:4000/ap/user/changePassword", password);

// User Api
export const getUserList = () => get("/user/users");

export const addUserToLS = (data) => post("/user/addUser", data);

export const deleteuserDl = ({ _id }) => del("/user/deleteUser/" + _id);

export const updateUserUL = (id) => patch("/user/updateUser", id);
