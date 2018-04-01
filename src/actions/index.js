import axios  from 'axios';
import { API_URL } from '../constants';
import store from "../boot/configureStore";

const getAuthHeader = () => ({
	headers: {'Authorization': "Bearer " + store.getState().reducer.jwtToken}
});

export const setIsLoading = (isLoading: boolean) => {
	return {
		type: "IS_LOADING",
		payload: { isLoading },
	};
}

export const setUser = (user: any) => {
	return {
		type: "SET_USER",
		payload: { user },
	};
}

export const setJWTToken = (jwtToken: any) => {
	return {
		type: "SET_JWT_TOKEN",
		payload: { jwtToken },
	};
}

export const login = (email, pwd) => {
	return dispatch => {
		return axios.post(`${API_URL}/auth/local`, {identifier: email, password: pwd});
	};
}

export const forgotPwd = (email) => {
	return dispatch => {
		return axios.post(`${API_URL}/auth/api/forgot-password`, {email});
	};
}

export const resetPwd = (email , password, passwordConfirmation) => {
	return dispatch => {
		return axios.post(`${API_URL}/auth/api/reset-password`, {email , password, passwordConfirmation});
	};
}

export const getStores = () => {
	return dispatch => {
		return axios.get(`${API_URL}/content-manager/api/explorer/stores`, getAuthHeader());
	};
}

export const addStore = (store) => {
	return dispatch => {
		return axios.post(`${API_URL}/content-manager/api/explorer/stores?source=content-manager`, store, getAuthHeader());
	};
}

export const editStore = (storeId, store) => {
	return dispatch => {
		return axios.put(`${API_URL}/content-manager/api/explorer/stores/${storeId}`, store, getAuthHeader());
	};
}
