import { StyleSheet, PixelRatio } from "react-native";
import { getSizeWRTPercentage } from '../../../utils';

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
	},
	headerContainer: {
		position: "relative",
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
	headerIcon: {
		width: getSizeWRTPercentage(30),
    resizeMode: "contain",
	}
});
export default styles;
