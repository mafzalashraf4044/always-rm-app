// @flow
import React from "react";
import { Dimensions } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import Stores from "./container/StoresContainer";
import Sidebar from "./container/SidebarContainer";

const deviceWidth = Dimensions.get("window").width;

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		Stores: { screen: Stores },
	},
	{
		drawerWidth: deviceWidth * 0.8,
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
