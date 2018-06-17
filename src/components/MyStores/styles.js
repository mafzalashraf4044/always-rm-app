import { StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight, deviceHeight } from "../../utils";

const styles: any = StyleSheet.create({
	container: {
		flex: 1,
		height: deviceHeight,
		backgroundColor: "#fff",
		position: "relative",
	},
	storesContainer: {
		flex: 1,
		backgroundColor: "#FFF",
	},
	tabContent: {
		flex: 1,
		height: deviceHeight,
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	withoutFilter: {
		backgroundColor: "transparent",
	},
	withFilter: {
		backgroundColor: "transparent",
		marginTop: getSizeWRTDeviceHeight(36),
	},
	modalContainer: {
		margin: getSizeWRTDeviceWidth(20),
	},
	modal: {
		backgroundColor: "#FFF",
    borderRadius: 5,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 3 },
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		elevation: 1,
		padding: getSizeWRTDeviceWidth(15),
	},
	header: {
		marginBottom: getSizeWRTDeviceWidth(15),
	},
	headerTxt: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
		fontFamily: "Always_Font",
		fontWeight: "500",
    fontSize: getSizeWRTDeviceWidth(20),
    lineHeight: getSizeWRTDeviceWidth(24),
	},
	body: {

	},
	bodyTxt: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
		fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(16),
	},
	dropdownContainer: {
		paddingTop: getSizeWRTDeviceWidth(10),
	},
	modalActions: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: getSizeWRTDeviceWidth(10),
	},
	actionBtnTxt: {
    color: "rgba(233,30,99,1)",
    backgroundColor: "transparent",
		fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
	}
});
export default styles;
