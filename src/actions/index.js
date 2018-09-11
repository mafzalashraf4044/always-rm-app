import axios  from "axios";
import { API_URL } from "../constants";
import reduxStore from "../boot/configureStore";

const getAuthHeader = () => ({
	headers: {"Authorization": "Bearer " + reduxStore.getState().reducer.jwtToken}
});

export const setIsLoading = (isLoading: boolean) => {
	return {
		type: "IS_LOADING",
		payload: { isLoading },
	};
};

export const setUser = (user: any) => {
	return {
		type: "SET_USER",
		payload: { user },
	};
};

export const setJWTToken = (jwtToken: any) => {
	return {
		type: "SET_JWT_TOKEN",
		payload: { jwtToken },
	};
};

export const saveCountries = (countries: any) => {
	return {
		type: "SAVE_COUNTRIES",
		payload: { countries },
	};
};

export const login = (email, pwd) => {
	return dispatch => {
		return axios.post(`${API_URL}/auth/local`, {identifier: email, password: pwd});
	};
};

export const forgotPwd = (email) => {
	return dispatch => {
		return axios.post(`${API_URL}/auth/api/forgot-password`, {email});
	};
};

export const resetPwd = (email , password, passwordConfirmation) => {
	return dispatch => {
		return axios.post(`${API_URL}/auth/api/reset-password`, {email , password, passwordConfirmation});
	};
};

export const getCountries = () => {
	return dispatch => {
		return axios.get(`${API_URL}/country`, getAuthHeader());
	};
};

export const getStores = (filter = null) => {
	return dispatch => {
		return axios.get(`${API_URL}/planner${filter ? filter : ""}`, getAuthHeader());
	};
};

export const addStore = (store) => {
	return dispatch => {
		return axios.post(`${API_URL}/store`, store, getAuthHeader());
	};
};

export const editStore = (storeId, store) => {
	return dispatch => {
		return axios.put(`${API_URL}/store/${storeId}`, store, getAuthHeader());
	};
};

export const getRcrFormData = (plannerId) => {	
	return dispatch => {
		return axios.get(`${API_URL}/datacollection/planner/${plannerId}`, getAuthHeader());
	};
};

export const saveRcrFormData = (rcrFormData) => {
	return dispatch => {
		return axios.post(`${API_URL}/datacollection`, rcrFormData, getAuthHeader());
	};
};

export const uploadImage = (imgUri) => {
	const formData = new FormData();
  const filename = imgUri.split("/").pop();
  const match = /\.(\w+)$/.exec(filename);
	const type = match ? `image/${match[1]}` : "image";

	formData.append("files", { uri: imgUri, name: filename, type });

  const config = {
    headers: {
			"content-type": "multipart/form-data",
			"Authorization": "Bearer " + reduxStore.getState().reducer.jwtToken
    },
	};

  return () => {
		return axios.post(`${API_URL}/upload`, formData, config);
  };
};

