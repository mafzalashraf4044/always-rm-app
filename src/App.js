// @flow
import React from "react";
import { Dimensions } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import ForgotPwd from "./container/ForgotPwdContainer";

import Home from "./container/HomeContainer";
import Sidebar from "./container/SidebarContainer";
import Stores from "./container/StoresContainer";
import AddEditStore from "./components/Stores/AddEditStore";

const deviceWidth = Dimensions.get("window").width;

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
		Stores: { screen: Stores },
		AddEditStore: { screen: AddEditStore },
	},
	{
		initialRouteName: "Stores",
		headerMode: "none",
	}
);

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		Stores: { screen: StoreNavigator },
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
	</Root>
);
