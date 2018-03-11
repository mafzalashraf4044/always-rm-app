import { Dimensions, StyleSheet, PixelRatio } from "react-native";
import { getSizeWRTDeviceWidth } from '../../utils';

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
		width: (deviceWidth - getSizeWRTDeviceWidth(45)) / 2,
		height: (deviceWidth - getSizeWRTDeviceWidth(45)) / 2,
		backgroundColor: "rgba(255,255,255,0.2)",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: getSizeWRTDeviceWidth(14),
	},
	homeTabBright: {
		backgroundColor: "rgba(255,255,255,0.6)",
	},
	tabIcon: {
		width: getSizeWRTDeviceWidth(45),
		height: getSizeWRTDeviceWidth(45),
	},
	homeTabTxt: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(15),
	},
});
export default styles;
