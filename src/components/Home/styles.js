import { StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight, deviceHeight, deviceWidth } from "../../utils";

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
		width: "100%",
		margin: getSizeWRTDeviceWidth(14),
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		flexWrap: "wrap",
	},
	homeTab: {
		width: ((deviceWidth - getSizeWRTDeviceWidth(28)) * 32) / 100,
		height: getSizeWRTDeviceHeight(90),
		backgroundColor: "rgba(254,254,254,0.2)",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: ((deviceWidth - getSizeWRTDeviceWidth(28)) * 2) / 100,
	},
	centerTab: {
		marginHorizontal: ((deviceWidth - getSizeWRTDeviceWidth(28)) * 2) / 100,
	},
	homeTabBright: {
		backgroundColor: "rgba(254,254,254,0.5)",
	},
	tabIcon: {
		width: getSizeWRTDeviceWidth(22),
		height: getSizeWRTDeviceWidth(20),
		resizeMode: "cover",
	},
	homeTabTxt: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(12),
		marginTop: getSizeWRTDeviceWidth(5),
		lineHeight: getSizeWRTDeviceWidth(14),
	},
	noRecentNotifications: {
		borderBottomWidth: 1,
		borderBottomColor: "#FFF",
		margin: getSizeWRTDeviceWidth(14),
		paddingBottom: getSizeWRTDeviceWidth(8),
	},
	noRecentNotificationsTxt: {
		color: "#fff",
		fontWeight: "500",
		textAlign: "center",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(14),
		lineHeight: getSizeWRTDeviceWidth(16),
	},
	recentNotifications: {
		margin: getSizeWRTDeviceWidth(14),
		marginBottom: getSizeWRTDeviceWidth(60),
	},
	recentNotificationsTxt: {
		color: "#fff",
		fontWeight: "500",
		textAlign: "center",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(16),
		lineHeight: getSizeWRTDeviceWidth(20),
		marginBottom: getSizeWRTDeviceWidth(14),
	},
	notification: {
		borderBottomWidth: 1,
		borderBottomColor: "#FFF",
		marginBottom: getSizeWRTDeviceWidth(8),
		paddingBottom: getSizeWRTDeviceWidth(8),
	},
	notificationTitle: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(16),
		lineHeight: getSizeWRTDeviceWidth(20),
		marginBottom: getSizeWRTDeviceWidth(14),
	},
	notificationBody: {
		color: "#B7B7B7",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(12),
		lineHeight: getSizeWRTDeviceWidth(16),
	},
	homeInfo: {
		paddingBottom: getSizeWRTDeviceWidth(14),
		justifyContent: "space-between",
	},
	lastLogin: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: getSizeWRTDeviceWidth(20),
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