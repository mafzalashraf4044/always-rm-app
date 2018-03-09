import { PixelRatio } from "react-native";

import variable from "./../variables/material";

export default (variables = variable) => {
	const labelTheme = {
		fontFamily: "Always_Font",
		fontSize:  PixelRatio.getPixelSizeForLayoutSize(14),
	};

	return labelTheme;
};
