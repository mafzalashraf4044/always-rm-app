import { Platform } from "react-native";

import variable from "./../variables/material";
import { getSizeWRTDeviceWidth } from '../../utils';

export default (variables = variable) => {
	const itemTheme = {
		".success": {
			"NativeBase.Icon": {
				color: variables.inputSuccessBorderColor,
			},
			"NativeBase.IconNB": {
				color: variables.inputSuccessBorderColor,
			},
			".rounded": {
				borderRadius: 30,
				borderColor: variables.inputSuccessBorderColor,
			},
			".regular": {
				borderColor: variables.inputSuccessBorderColor,
			},
			".underline": {
				borderWidth: variables.borderWidth * 2,
				borderTopWidth: 0,
				borderRightWidth: 0,
				borderLeftWidth: 0,
				borderColor: variables.inputSuccessBorderColor,
			},
			borderColor: variables.inputSuccessBorderColor,
		},
		".error": {
			"NativeBase.Icon": {
				color: variables.inputErrorBorderColor,
			},
			"NativeBase.IconNB": {
				color: variables.inputErrorBorderColor,
			},
			".rounded": {
				borderRadius: 30,
				borderColor: variables.inputErrorBorderColor,
			},
			".regular": {
				borderColor: variables.inputErrorBorderColor,
			},
			".underline": {
				borderWidth: variables.borderWidth * 2,
				borderTopWidth: 0,
				borderRightWidth: 0,
				borderLeftWidth: 0,
				borderColor: variables.inputErrorBorderColor,
			},
			borderColor: variables.inputErrorBorderColor,
		},
		".disabled": {
			borderColor: "rgba(208,208,208,1)",
			"NativeBase.Icon": {
				color: "#384850",
			},
			"NativeBase.IconNB": {
				color: "#384850",
			},
			"NativeBase.Input": {
				color: "rgba(206,206,206,1)",
			},
			"NativeBase.Label": {
				color: "rgba(206,206,206,1)",
			},
		},

		".stackedLabel": {
			"NativeBase.Label": {
				position: null,
				top: null,
				left: null,
				right: null,
				paddingTop: 5,
				alignSelf: "flex-start",
				fontSize: variables.inputFontSize - 2,
			},
			"NativeBase.Icon": {
				marginTop: 36,
			},
			"NativeBase.Input": {
				alignSelf: Platform.OS === "ios" ? "stretch" : "flex-start",
				flex: 1,
				width: Platform.OS === "ios" ? null : variables.deviceWidth - 25,
				fontSize: variables.inputFontSize,
			},
			flexDirection: null,
		},

		flexDirection: "row",
		alignItems: "center",
		borderWidth: 0,
		backgroundColor: "transparent",
		marginBottom: getSizeWRTDeviceWidth(20),
		borderColor: variables.inputBorderColor,
		borderBottomWidth: 0.8,

		"NativeBase.Input": {
			height: getSizeWRTDeviceWidth(50),
			paddingTop: getSizeWRTDeviceWidth(20),
		},
		"NativeBase.Label": {
			top: getSizeWRTDeviceWidth(8),
			color: "rgba(147,147,147,1)",
		},

		".light": {
			borderColor: "#FFF",
			"NativeBase.Input": {
				color: "#FFF",
			},
			"NativeBase.Label": {
				color: "rgba(183,183,183,1)",
			},
		},
	};

	return itemTheme;
};
