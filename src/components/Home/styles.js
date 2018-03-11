import { Dimensions, StyleSheet, PixelRatio } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight } from '../../utils';

const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	container: {
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
	homeTabs: {
		padding: getSizeWRTDeviceWidth(14),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		flexWrap: "wrap"
	},
	homeTab: {
		// width: (deviceWidth - getSizeWRTDeviceWidth(45)) / 2,
		// height: (deviceWidth - getSizeWRTDeviceWidth(45)) / 2,


		width: getSizeWRTDeviceWidth(165),
		height: getSizeWRTDeviceHeight(145),
		backgroundColor: "rgba(254,254,254,0.2)",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: getSizeWRTDeviceWidth(14),
	},
	homeTabBright: {
		backgroundColor: "rgba(254,254,254,0.5)",
	},
	tabIcon: {
		width: getSizeWRTDeviceWidth(60),
		height: getSizeWRTDeviceWidth(60),
	},
	homeTabTxt: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(14),
		lineHeight: getSizeWRTDeviceWidth(16),
	},
});
export default styles;
