// @flow
import React from "react";
import { Dimensions } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import Stores from "./container/StoresContainer";
import Sidebar from "./container/SidebarContainer";
import AddEditStore from "./components/Stores/AddEditStore";

const deviceWidth = Dimensions.get("window").width;

const _Stores = StackNavigator(
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
		Stores: { screen: _Stores },
	},
	{
		drawerWidth: deviceWidth * 0.85,
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
