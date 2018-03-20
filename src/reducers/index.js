import { combineReducers } from "redux";

import loginReducer from "../container/LoginContainer/reducer";
import forgotPwdReducer from "../container/ForgotPwdContainer/reducer";
import homeReducer from "../container/HomeContainer/reducer";
import storesReducer from "../container/StoresContainer/reducer";
import sidebarReducer from "../container/SidebarContainer/reducer";
import addEditStoreReducer from "../container/AddEditStoreContainer/reducer";
import storeVisitReducer from "../container/StoreVisitContainer/reducer";

export default combineReducers({
	loginReducer,
	forgotPwdReducer,
	homeReducer,
	storesReducer,
	sidebarReducer,
	addEditStoreReducer,
	storeVisitReducer
});
