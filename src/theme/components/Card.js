import variable from "./../variables/material";

export default (variables = variable) => {
	const cardTheme = {
		".transparent": {
			shadowColor: null,
			shadowOffset: null,
			shadowOpacity: null,
			shadowRadius: null,
			elevation: null,
		},
		marginVertical: 15,
		marginHorizontal: 15,
		flex: 1,
		borderWidth: variables.borderWidth,
		borderRadius: 5,
		borderColor: variables.cardBorderColor,
		flexWrap: "wrap",
		backgroundColor: variables.cardDefaultBg,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 3 },
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		elevation: 1,
	};

	return cardTheme;
};
