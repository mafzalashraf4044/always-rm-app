import { StyleSheet, Dimensions } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight } from "../../../utils";

const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	header: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "transparent",
		height: getSizeWRTDeviceHeight(48),
		marginTop: getSizeWRTDeviceHeight(24),
		marginBottom: getSizeWRTDeviceHeight(10),
		paddingLeft: getSizeWRTDeviceWidth(20),
		paddingRight: getSizeWRTDeviceWidth(20),
	},
	headerIcon: {
		width: getSizeWRTDeviceWidth(40),
		resizeMode: "contain",
	},
	body: {
		width: deviceWidth - getSizeWRTDeviceWidth(60),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	center: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginLeft: getSizeWRTDeviceWidth(30),
	},
	title: {
		color: "#FFF",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(18),
		lineHeight: getSizeWRTDeviceWidth(20),
	},
	left: {},
	right: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
});
export default styles;
