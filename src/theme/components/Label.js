import variable from "./../variables/material";
import { getSizeWRTPercentage } from '../../utils';

export default (variables = variable) => {
	const labelTheme = {
		fontFamily: "Always_Font",
		fontSize:  getSizeWRTPercentage(14),
	};

	return labelTheme;
};
