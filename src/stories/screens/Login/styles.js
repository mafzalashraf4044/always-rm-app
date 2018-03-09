import { Platform, Dimensions, StyleSheet, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	loginScreen: {
		flex: 1,
		height: Platform.OS === "ios" ? deviceHeight : deviceHeight - 20,
	},
	loginView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	logoContainer: {
		flex: 1,
		width: "70%",
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		color: '#FFF',
		fontSize: PixelRatio.getPixelSizeForLayoutSize(30),
		fontFamily: "Always_Font",
	},
	formContainer: {
		flex: 1,
		width: "70%",
	},
	loginBtn: {
		marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
		backgroundColor: "rgba(233,30,99,1)",
	},
	loginBtnTxt: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
	},
	forgotPwdTxt: {
		color: "#fff",
		textAlign: "center",
		fontFamily: "Always_Font",
		fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
	}
});
export default styles;
