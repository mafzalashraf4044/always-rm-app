import { Platform, Dimensions, StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight } from '../../utils';

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
		width: getSizeWRTDeviceWidth(205),
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	logo: {
		width: getSizeWRTDeviceWidth(205),
		marginTop: getSizeWRTDeviceHeight(68), // replace with 180 with react logo
		resizeMode: "contain",
	},
	formContainer: {
		flex: 1,
		width: getSizeWRTDeviceWidth(230),
	},
	loginBtn: {
		marginVertical: getSizeWRTDeviceHeight(10),
		backgroundColor: "rgba(233,30,99,1)",
	},
	loginBtnTxt: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(14),
		lineHeight: getSizeWRTDeviceWidth(14),
	},
	forgotPwdTxt: {
		color: "#fff",
		textAlign: "center",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(14),
		lineHeight: getSizeWRTDeviceWidth(16),
	}
});
export default styles;
