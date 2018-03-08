import { Dimensions, StyleSheet, PixelRatio } from "react-native";

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
		width: '70%',
		marginBottom: 50,
	},
	loginBtn: {
		backgroundColor: 'rgba(233,30,99,1)',
	},
	loginBtnTxt: {
		color: '#fff',
		fontSize: PixelRatio.getFontScale() * 16,
	},
	forgotPwdTxt: {
		color: '#fff',
		marginTop: 10,
		textAlign: 'center',
		fontSize: PixelRatio.getFontScale() * 16,
	}
});
export default styles;
