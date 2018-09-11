/**
 * @author Afzal Ashraf <afzalashraf.dev@gmail.com>
 */

// @flow
import React from "react";

import { Dimensions } from "react-native";

//	third party components
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

//	container components
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
import MyCalendar from "./container/MyCalendarContainer";
import Notifications from "./container/NotificationsContainer";

//	constants
const deviceWidth = Dimensions.get("window").width;

//	proxy for debugging
const _XHR = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;
XMLHttpRequest = _XHR;

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

const CalendarNavigator = StackNavigator(
	{
		MyCalendar: { screen: MyCalendar },
		AddEditStore: { screen: AddEditStore },
		SearchStores: { screen: SearchStores },
	},
	{
		initialRouteName: "MyCalendar",
		headerMode: "none",
	}
);

const NotificationsNavigator = StackNavigator(
	{
		Notifications: { screen: Notifications },
		AddEditStore: { screen: AddEditStore },
		SearchStores: { screen: SearchStores },
	},
	{
		initialRouteName: "Notifications",
		headerMode: "none",
	}
);

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		MyStores: { screen: StoreNavigator },
		SKUAnalysis: { screen: SKUNavigator },
		MyCalendar: { screen: CalendarNavigator },
		Notifications: { screen: NotificationsNavigator },
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
