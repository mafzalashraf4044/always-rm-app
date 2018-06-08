import variable from "./../variables/material";
import { deviceHeight } from "../../utils";

export default (variables = variable) => {
	const theme = {
		flex: 1,
		height: deviceHeight,
	};

	return theme;
};
