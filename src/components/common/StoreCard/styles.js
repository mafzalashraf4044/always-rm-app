import { StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight } from "../../../utils";

const styles: any = StyleSheet.create({
  card: {
    backgroundColor: "rgba(254,254,254,1)",
    borderRadius: 5,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 3 },
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		elevation: 1,
    margin: getSizeWRTDeviceWidth(16),
  },
  imgContainer: {
    width: "100%",
    justifyContent: "flex-end",
    height: getSizeWRTDeviceHeight(192),
  },
  storeImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: getSizeWRTDeviceHeight(192),
  },
  storeInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  editIconContainer: {

  },
  editIcon: {
    width: getSizeWRTDeviceWidth(30),
		resizeMode: "cover",
  },
  cardBody: {
    width: "100%",
    padding: getSizeWRTDeviceWidth(16),
  },
  extraInfo: {},
  address: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
		fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
  },
  stepsCompleted: {
    color: "rgba(155,155,155,1)",
    backgroundColor: "transparent",
		fontFamily: "Always_Font",
    fontStyle: "italic",
    fontSize: getSizeWRTDeviceWidth(10),
    lineHeight: getSizeWRTDeviceWidth(12),
    marginTop: getSizeWRTDeviceWidth(10)
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: getSizeWRTDeviceWidth(15),
  },
  txtBtnsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  txtBtn: {
    color: "rgba(233,30,99,1)",
    backgroundColor: "transparent",
		fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
    marginRight: getSizeWRTDeviceWidth(15),
  },
  expandIcon: {
		width: getSizeWRTDeviceWidth(30),
		resizeMode: "cover",
  },
  collapsable: {
    paddingTop: getSizeWRTDeviceWidth(15),
  },
  storeDetails: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
		fontFamily: "Always_Font",
    textAlign: "justify",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(16),
  }

});
export default styles;
