import { StyleSheet, Dimensions } from "react-native";
import { getSizeWRTDeviceWidth } from "../../utils";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
  addEditStore: {
		flex: 1,
    backgroundColor: "#FFF",
		height: deviceHeight,
  },
  storeImgContainer: {
		flex: 0.5,
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
  addEditImg: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: getSizeWRTDeviceWidth(15),
  },
  cameraIcon: {
    width: getSizeWRTDeviceWidth(30),
    resizeMode: "contain",
  },
  addEditImgTxt: {
    color: "#FFF",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
    marginLeft: getSizeWRTDeviceWidth(10),
  },
  scrollView: {
    backgroundColor: "#FFF",
  },
  formView: {
    flex: 1,
    paddingHorizontal: getSizeWRTDeviceWidth(15),
    backgroundColor: "#FFF",
  },
  coulmns1: {
  },
  coulmns2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  widthHalf: {
    width: "45%",
  },
  formSection: {
    marginVertical: getSizeWRTDeviceWidth(15),
  },
  sectionHeadingContainer: {
    marginBottom: getSizeWRTDeviceWidth(15),
  },
  sectionHeadingTxt: {
    color: "rgba(233,30,99,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(16),
    lineHeight: getSizeWRTDeviceWidth(20),
  },
  dropdownContainer: {
    position: "relative",
  },
  dropdownIcon: {
    width: getSizeWRTDeviceWidth(20),
    resizeMode: "contain",
    position: "absolute",
    right: getSizeWRTDeviceWidth(6),
    bottom: getSizeWRTDeviceWidth(20),
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: getSizeWRTDeviceWidth(10),
  },
  lightBtn: {
    marginRight: getSizeWRTDeviceWidth(15),
    backgroundColor: "transparent",
		shadowColor: "#FFF",
		elevation: 0,
  },
  lightBtnTxt: {
    color: "rgba(233,30,99,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
  darkBtn: {
    paddingHorizontal: getSizeWRTDeviceWidth(20),
    backgroundColor: "rgba(233,30,99,1)",
  },
  darkBtnTxt: {
    color: "#FFF",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
});

export default styles;
