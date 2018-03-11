import { Platform } from "react-native";

import variable from "./../variables/material";
import { getSizeWRTPercentage } from '../../utils';

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

		borderWidth: variables.borderWidth * 2,
		borderTopWidth: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
		borderColor: variables.inputBorderColor,
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",

		marginVertical: getSizeWRTPercentage(5),
		marginLeft: 0,
		"NativeBase.Input": {
			height: getSizeWRTPercentage(50),
			paddingTop: getSizeWRTPercentage(20),
		},
		"NativeBase.Label": {
			top: getSizeWRTPercentage(8),
			color: "rgba(147,147,147,1)",
		},

		".light": {
			borderColor: "#FFF",
			"NativeBase.Input": {
				color: "#FFF",
			},
			"NativeBase.Label": {
				color: "rgba(147,147,147,1)",
			},
		},
	};

	return itemTheme;
};
