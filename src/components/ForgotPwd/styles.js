import { StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight, deviceHeight } from "../../utils";

const styles: any = StyleSheet.create({
  keyboardAvoidingView: {
    backgroundColor: "#FFF",
  },
	forgotPwdScreen: {
		backgroundColor: "#FFF",
		height: deviceHeight,
	},
	forgotView: {
		height: deviceHeight,
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
	formContainer: {
    flex: 1,
    justifyContent: "center",
		width: getSizeWRTDeviceWidth(230),
	},
  formActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
		alignItems: "center",
		marginVertical: getSizeWRTDeviceHeight(10),
  },
	errMessageContainer: {

	},
	errMessageTxt: {
		color: "rgba(233,30,99,1)",
		backgroundColor: "transparent",
		textAlign: "center",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(10),
		lineHeight: getSizeWRTDeviceWidth(12),
	},
  lightBtn: {
    marginRight: getSizeWRTDeviceWidth(15),
    backgroundColor: "transparent",
		shadowColor: "#FFF",
		elevation: 0,
  },
  lightBtnTxt: {
    color: "#FFF",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
  darkBtn: {
    paddingVertical: getSizeWRTDeviceWidth(10),
    paddingHorizontal: getSizeWRTDeviceWidth(20),
    backgroundColor: "rgba(233,30,99,1)",
  },
  darkBtnTxt: {
    color: "#FFF",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
});
export default styles;
