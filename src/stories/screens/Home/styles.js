import { Dimensions, StyleSheet, PixelRatio } from "react-native";
import { getSizeWRTPercentage } from '../../../utils';

const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#000",
	},
	menuIcon: {
		width: getSizeWRTPercentage(30),
    resizeMode: "contain",
	},
	headerTitle: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTPercentage(18),
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
		padding: getSizeWRTPercentage(14),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		flexWrap: "wrap"
	},
	homeTab: {
		width: (deviceWidth - getSizeWRTPercentage(45)) / 2,
		height: (deviceWidth - getSizeWRTPercentage(45)) / 2,
		backgroundColor: "rgba(255,255,255,0.2)",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: getSizeWRTPercentage(14),
	},
	homeTabBright: {
		backgroundColor: "rgba(255,255,255,0.6)",
	},
	tabIcon: {
		width: getSizeWRTPercentage(45),
		height: getSizeWRTPercentage(45),
	},
	homeTabTxt: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTPercentage(15),
	},
});
export default styles;
