import { StyleSheet, Dimensions } from "react-native";
import { getSizeWRTDeviceHeight } from "../../utils";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	container: {
		flex: 1,
		height: deviceHeight,
		backgroundColor: "#fff",
		position: 'relative',
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	tabContentWithFilter: {
		marginTop: getSizeWRTDeviceHeight(36),
	}
});
export default styles;
