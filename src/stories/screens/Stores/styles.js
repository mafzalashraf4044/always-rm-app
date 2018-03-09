import { StyleSheet, PixelRatio } from "react-native";

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
	},
	headerContainer: {
		position: "relative",
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	headerIcon: {
		width: PixelRatio.get() * 10,
		resizeMode: "contain",
	}
});
export default styles;
