import { StyleSheet, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	container: {
		flex: 1,
		height: deviceHeight,
		backgroundColor: "#fff",
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
});
export default styles;
