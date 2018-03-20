import axios  from 'axios';
import { API_URL } from '../constants';

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

export const login = (email, pwd) => {
	return dispatch => {
    return axios.post(`${API_URL}/auth/local`, {identifier: email, password: pwd});
	};
}
