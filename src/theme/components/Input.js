import { PixelRatio } from "react-native";

import variable from "./../variables/material";

export default (variables = variable) => {
	const inputTheme = {
		".multiline": {
			height: null,
		},
		flex: 1,
		fontFamily: "Always_Font",
		color: variables.inputColor,
		height: variables.inputHeightBase,
		fontSize:  PixelRatio.getPixelSizeForLayoutSize(14) / PixelRatio.get(),
	};

	return inputTheme;
};
