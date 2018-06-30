import { StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, deviceWidth, deviceHeight } from "../../utils";

const styles: any = StyleSheet.create({
	container: {
		flex: 1,
		height: deviceHeight,
		backgroundColor: "#FFF",
		position: "relative",
	},
	calendarContainer: {
		flex: 1,
		backgroundColor: "#FFF",
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	divider: {
		height: 1,
    width: deviceWidth,
    backgroundColor: "rgba(233,30,99,0.15)",
  },
	eventsContainer: {
		backgroundColor: "#FFF",
	},
	eventsHeading: {
		padding: getSizeWRTDeviceWidth(15),
	},
	eventsHeadingText: {
		color: "rgba(233,30,99,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(16),
    lineHeight: getSizeWRTDeviceWidth(20),
	},
	event: {
		backgroundColor: "#FFF",
		borderBottomWidth: 1,
		borderBottomColor: "rgba(74,74,74,1)",
		marginHorizontal: getSizeWRTDeviceWidth(15),
		paddingBottom: getSizeWRTDeviceWidth(15),
	},
	store: {
		flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: getSizeWRTDeviceWidth(15),
	},
	storeInfo: {

	},
	storeName: {
    color: "rgba(233,30,99,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(16),
		lineHeight: getSizeWRTDeviceWidth(20),
		marginBottom: getSizeWRTDeviceWidth(5),
	},
	address: {
    color: "rgba(183,183,183,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
		lineHeight: getSizeWRTDeviceWidth(14),
		marginBottom: getSizeWRTDeviceWidth(2),
	},
	expandIcon: {
		width: getSizeWRTDeviceWidth(30),
		resizeMode: "cover",
  },
  collapsable: {
    paddingTop: getSizeWRTDeviceWidth(15),
  },
  storeDetails: {
    color: "rgba(145,145,145,1)",
    backgroundColor: "transparent",
		fontFamily: "Always_Font",
    textAlign: "justify",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(16),
	},
});
export default styles;
