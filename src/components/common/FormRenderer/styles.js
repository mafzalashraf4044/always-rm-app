import { StyleSheet, Dimensions } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight } from "../../../utils";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
  textbox: {
    marginTop: getSizeWRTDeviceWidth(20),
  },
  dataGridRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dataGridColumn: {

  },
  formView: {
    height: "100%",
    paddingHorizontal: getSizeWRTDeviceWidth(15),
    backgroundColor: "#fff",
  },
  formLayouts: {
    marginTop: getSizeWRTDeviceWidth(15),
  },
  formLayout: {
    marginBottom: getSizeWRTDeviceWidth(25),
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: getSizeWRTDeviceWidth(5),
  },
  headingMarginTop: {

  },
  headingTxt: {
    color: "rgba(233,30,99,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(16),
    lineHeight: getSizeWRTDeviceWidth(20),
  },
  currentRSPList: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(233,30,99,0.28)",
  },
  RSPListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: getSizeWRTDeviceWidth(15),
  },
  RSPListTitle: {
    color: "rgba(233,30,99,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(16),
    lineHeight: getSizeWRTDeviceWidth(20),
  },
  addRSPBtn: {
    width: getSizeWRTDeviceWidth(172),
    paddingVertical: getSizeWRTDeviceWidth(10),
    paddingHorizontal: getSizeWRTDeviceWidth(20),
    backgroundColor: "rgba(233,30,99,1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    width: getSizeWRTDeviceWidth(22),
    resizeMode: "contain",
  },
  addRSPBtnTxt: {
    color: "#FFF",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
  RSTListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(74,74,74,1)",
    paddingBottom: getSizeWRTDeviceWidth(15),
    marginBottom: getSizeWRTDeviceWidth(15),
  },
  RSTListItemTxt: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchTxt: {
    color: "rgba(233,30,99,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(16),
    lineHeight: getSizeWRTDeviceWidth(20),
  },
  checkboxContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    borderWidth: 1,
    backgroundColor: "#fff",
		borderColor: "rgba(233,30,99,1)",
		width: getSizeWRTDeviceWidth(25),
		height: getSizeWRTDeviceWidth(25),
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "rgba(233,30,99,1)",
		width: "80%",
		height: "80%",
  },
  checkboxTxt: {
    color: "rgba(147,147,147,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
    marginBottom: getSizeWRTDeviceWidth(8),
  },
  htmlElementTxt: {
    color: "rgba(155,155,155,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
  divider: {
    width: deviceWidth,
    height: 2,
    marginHorizontal: getSizeWRTDeviceWidth(-15),
    marginVertical: getSizeWRTDeviceWidth(5),
    backgroundColor: "rgba(233,30,99,0.15)",
  },
  addOneMoreBtnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: getSizeWRTDeviceWidth(10),
  },
  addOneMoreBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: getSizeWRTDeviceWidth(146),
    height: getSizeWRTDeviceWidth(36),
    paddingVertical: getSizeWRTDeviceWidth(10),
    paddingHorizontal: getSizeWRTDeviceWidth(20),
    backgroundColor: "rgba(233,30,99,1)",
  },
  addOneMoreBtnTxt: {
    color: "#FFF",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: getSizeWRTDeviceWidth(66),
    paddingTop: getSizeWRTDeviceWidth(10),
    marginBottom: getSizeWRTDeviceWidth(30),
  },
  startBtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: getSizeWRTDeviceWidth(36),
    paddingVertical: getSizeWRTDeviceWidth(10),
    paddingHorizontal: getSizeWRTDeviceWidth(20),
    backgroundColor: "rgba(233,30,99,1)",
  },
  startBtnTxt: {
    color: "#FFF",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
  lightBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: getSizeWRTDeviceWidth(132),
    height: getSizeWRTDeviceWidth(36),
    paddingVertical: getSizeWRTDeviceWidth(10),
    paddingHorizontal: getSizeWRTDeviceWidth(20),
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
    justifyContent: "center",
    alignItems: "center",
    width: getSizeWRTDeviceWidth(132),
    height: getSizeWRTDeviceWidth(36),
    paddingVertical: getSizeWRTDeviceWidth(10),
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
