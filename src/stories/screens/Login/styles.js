import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	loginView: {
		flex: 1,
		height: deviceHeight - 24,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	backgroundImg: {
		flex: 1,
		resizeMode: 'cover',
		position: 'absolute',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
	},
	formContainer: {
		width: '80%',
		marginBottom: 50,
	},
	forgotPwdTxt: {
		textAlign: 'center'
	}
});
export default styles;
