// @flow
import React from "react";
import { Dimensions } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";

import Loader from "./container/LoaderContainer";

import Login from "./container/LoginContainer";
import ForgotPwd from "./container/ForgotPwdContainer";

import Home from "./container/HomeContainer";
import Sidebar from "./container/SidebarContainer";

import MyStores from "./container/MyStoresContainer";
import SKUAnalysis from "./container/SKUAnalysisContainer";
import AddEditStore from "./container/AddEditStoreContainer";
import SearchStores from "./container/SearchStoresContainer";
import StoreVisit from "./container/StoreVisitContainer";
import SKUVisit from "./container/SKUVisitContainer";

const deviceWidth = Dimensions.get("window").width;

const _XHR = GLOBAL.originalXMLHttpRequest ?  
    GLOBAL.originalXMLHttpRequest :           
    GLOBAL.XMLHttpRequest                     

XMLHttpRequest = _XHR

const AuthNavigator = StackNavigator(
	{
		Login: { screen: Login },
		ForgotPwd: { screen: ForgotPwd },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

const StoreNavigator = StackNavigator(
	{
		MyStores: { screen: MyStores },
		AddEditStore: { screen: AddEditStore },
		SearchStores: { screen: SearchStores },
		StoreVisit: { screen: StoreVisit },
	},
	{
		initialRouteName: "MyStores",
		headerMode: "none",
	}
);

const SKUNavigator = StackNavigator(
	{
		SKUAnalysis: { screen: SKUAnalysis },
		AddEditStore: { screen: AddEditStore },
		SearchStores: { screen: SearchStores },
		SKUVisit: { screen: SKUVisit },
	},
	{
		initialRouteName: "SKUAnalysis",
		headerMode: "none",
	}
);

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		MyStores: { screen: StoreNavigator },
		SKUAnalysis: { screen: SKUNavigator },
	},
	{
		drawerWidth: deviceWidth * 0.85,
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Auth: { screen: AuthNavigator },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Auth",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
		<Loader />
	</Root>
);
