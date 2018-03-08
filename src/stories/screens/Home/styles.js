import { Dimensions, StyleSheet, PixelRatio } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#000",
	},
	row: {
		flex: 1,
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: "center",
	},
	mt: {
		marginTop: 18,
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
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		flexWrap: "wrap"
	},
	homeTab: {
		width: (deviceWidth - 60) / 2,
		height: (deviceWidth - 60) / 2,
		backgroundColor: "rgba(255,255,255,0.2)",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20
	},
	homeTabBright: {
		backgroundColor: "rgba(255,255,255,0.6)",
	},
	tabIcon: {
		width: 280 / PixelRatio.getPixelSizeForLayoutSize(1),
		height: 280 / PixelRatio.getPixelSizeForLayoutSize(1),
	},
	homeTabTxt: {
		color: "#fff",
	},
});
export default styles;
