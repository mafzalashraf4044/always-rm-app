import variable from "./../variables/material";

export default (variables = variable) => {
	const tabBarTheme = {
		".tabIcon": {
			height: undefined,
		},
		".vertical": {
			height: 60,
		},
		"NativeBase.Button": {
			".transparent": {
				"NativeBase.Text": {
					fontSize: variables.tabFontSize,
					color: variables.sTabBarActiveTextColor,
					fontWeight: "400",
				},
				"NativeBase.IconNB": {
					color: variables.sTabBarActiveTextColor,
				},
			},
			"NativeBase.IconNB": {
				color: variables.sTabBarActiveTextColor,
			},
			"NativeBase.Text": {
				fontSize: variables.tabFontSize,
				color: variables.sTabBarActiveTextColor,
				fontWeight: "400",
			},
			".isTabActive": {
				"NativeBase.Text": {
					fontWeight: "900",
				},
			},
			flex: 1,
			alignSelf: "stretch",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: null,
			borderWidth: 1,
			borderBottomColor: "rgba(233,30,99,1)",
			backgroundColor: variables.tabBgColor,
		},
		height: 45,
		flexDirection: "row",
		justifyContent: "space-around",
		borderWidth: 0,
		backgroundColor: variables.tabBgColor,
	};

	return tabBarTheme;
};
