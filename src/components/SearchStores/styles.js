import { StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight, deviceHeight } from "../../utils";

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingBottom: getSizeWRTDeviceHeight(30),
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  scrollView: {
    height: deviceHeight - getSizeWRTDeviceHeight(82),
    backgroundColor: "#FFF",
  },
	noStoresTextContainer: {
    margin: getSizeWRTDeviceWidth(15),
	},
	noStoresText: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
		fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
	}
});

export default styles;
