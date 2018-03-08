import variable from "./../variables/material";

export default (variables = variable) => {
	const inputTheme = {
		".multiline": {
			height: null,
		},
		height: variables.inputHeightBase,
		color: "#000",
		flex: 1,
		marginLeft: 0,
		fontSize: variables.inputFontSize,
		lineHeight: variables.inputLineHeight,
	};

	return inputTheme;
};
