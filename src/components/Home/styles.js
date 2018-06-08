import { StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight, deviceHeight } from "../../utils";

const styles: any = StyleSheet.create({
	container: {
		flex: 1,
		height: deviceHeight,
		backgroundColor: "#000",
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	content: {
		flex: 1,
	},
	homeTabs: {
		flex: 0.64,
		padding: getSizeWRTDeviceWidth(14),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		flexWrap: "wrap"
	},
	homeTab: {
		width: getSizeWRTDeviceWidth(165),
		height: getSizeWRTDeviceHeight(145),
		backgroundColor: "rgba(254,254,254,0.2)",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: getSizeWRTDeviceHeight(14),
	},
	homeTabBright: {
		backgroundColor: "rgba(254,254,254,0.5)",
	},
	tabIcon: {
		width: getSizeWRTDeviceWidth(60),
		height: getSizeWRTDeviceWidth(60),
		resizeMode: "cover",
	},
	homeTabTxt: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(14),
		lineHeight: getSizeWRTDeviceWidth(16),
	},
	homeInfo: {
		flex: 0.36,
		paddingBottom: getSizeWRTDeviceWidth(14),
		justifyContent: "space-between",
	},
	lastLogin: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	lastLoginTxt: {
		color: "#fff",
		backgroundColor: "transparent",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(12),
		lineHeight: getSizeWRTDeviceWidth(14),
	},
	logosContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	logo1: {
		width: "30%",
		height: 40,
		resizeMode: "contain",
		marginRight: getSizeWRTDeviceWidth(14)
	},
	logo2: {
		width: "20%",
		height: 40,
		resizeMode: "contain",
	}
});
export default styles;