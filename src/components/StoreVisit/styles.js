import { StyleSheet, Dimensions } from "react-native";
import { getSizeWRTDeviceWidth } from "../../utils";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
  storeVisit: {
    flex: 1,
		height: deviceHeight,
  },
  storeImgContainer: {
    height: 0.3 * deviceHeight,
    justifyContent: "space-between",
    backgroundColor: "rgba(183,183,183,1)",
  },
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
  storeInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: getSizeWRTDeviceWidth(16),
    paddingVertical: getSizeWRTDeviceWidth(14),
  },
  infoText: {

  },
  storeID: {
    color: "rgba(228,228,228,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(10),
    lineHeight: getSizeWRTDeviceWidth(12),
  },
  storeName: {
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(20),
    lineHeight: getSizeWRTDeviceWidth(24),
  },
  storeManager: {
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(10),
    lineHeight: getSizeWRTDeviceWidth(12),
  },
  lastSaved: {
    color: "rgba(202,202,202,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontStyle: "italic",
    fontSize: getSizeWRTDeviceWidth(10),
    lineHeight: getSizeWRTDeviceWidth(12),
    marginTop: getSizeWRTDeviceWidth(5)
  },
  visitForm: {
    height: 0.7 * deviceHeight,
    backgroundColor: "#FFF",
  },
  scrollView: {
    height: "100%",
    backgroundColor: "#FFF",
  },
});

export default styles;
