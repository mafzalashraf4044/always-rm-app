import { Platform, PixelRatio } from "react-native";

import variable from "./../variables/material";

export default (variables = variable) => {
	const itemTheme = {
		".floatingLabel": {
			marginVertical: PixelRatio.getPixelSizeForLayoutSize(5),
			marginLeft: 0,
			"NativeBase.Input": {
				height: PixelRatio.getPixelSizeForLayoutSize(50),
				paddingTop: PixelRatio.getPixelSizeForLayoutSize(20),
			},
			"NativeBase.Label": {
				top: PixelRatio.getPixelSizeForLayoutSize(8),
				color: "rgba(183,183,183,1)",
			},
		},
		".underline": {
			"NativeBase.Input": {
				paddingLeft: 15,
			},
			".success": {
				borderColor: variables.inputSuccessBorderColor,
			},
			".error": {
				borderColor: variables.inputErrorBorderColor,
			},
			borderWidth: variables.borderWidth * 2,
			borderTopWidth: 0,
			borderRightWidth: 0,
			borderLeftWidth: 0,
			borderColor: variables.inputBorderColor,
		},
		".regular": {
			"NativeBase.Input": {
				paddingLeft: 8,
			},
			"NativeBase.Icon": {
				paddingLeft: 10,
			},
			".success": {
				borderColor: variables.inputSuccessBorderColor,
			},
			".error": {
				borderColor: variables.inputErrorBorderColor,
			},
			borderWidth: variables.borderWidth * 2,
			borderColor: variables.inputBorderColor,
		},
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
			"NativeBase.Icon": {
				color: "#384850",
			},
			"NativeBase.IconNB": {
				color: "#384850",
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
	};

	return itemTheme;
};
