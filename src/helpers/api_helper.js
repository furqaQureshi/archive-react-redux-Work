import axios from "axios"


//apply base url for axios
// const API_URL = "http://148.72.173.22:4000/api"
//const API_URL = "http://192.168.88.47:4000/api"
const API_URL = "http://localhost:4000/api"


const axiosApi = axios.create({
  baseURL: API_URL,
})

// axiosApi.defaults.headers.common["Authorization"] = token
axiosApi.interceptors.request.use(
	(configuration) => {
		const res = JSON.parse(localStorage.getItem('authUser'));
		if (res) {
			configuration.headers['Authorization'] = `Bearer ${res?.token}`;
		}
		return configuration;
	},
	function (error) {
		return Promise.reject(error);
	}
);


axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function patch(url, data, config = {}) {
  return axiosApi
    .patch(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
