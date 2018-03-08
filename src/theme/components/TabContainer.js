import variable from "./../variables/material";
import { Platform } from "react-native";

export default (variables = variable) => {
	const platformStyle = variables.platformStyle;

	const tabContainerTheme = {
		height: 50,
		flexDirection: "row",
		justifyContent: "space-around",
	};

	return tabContainerTheme;
};
