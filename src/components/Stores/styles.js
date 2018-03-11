import { StyleSheet, PixelRatio } from "react-native";
import { getSizeWRTDeviceWidth } from '../../utils';

const styles: any = StyleSheet.create({
	container: {
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
