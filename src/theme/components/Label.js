import variable from "./../variables/material";
import { getSizeWRTDeviceWidth } from '../../utils';

export default (variables = variable) => {
	const labelTheme = {
		fontFamily: "Always_Font",
		fontSize:  getSizeWRTDeviceWidth(10),
	};

	return labelTheme;
};
