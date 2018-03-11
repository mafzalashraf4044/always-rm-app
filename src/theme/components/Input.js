import { getSizeWRTDeviceWidth } from '../../utils';

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
		fontSize:  getSizeWRTDeviceWidth(14),
	};

	return inputTheme;
};
