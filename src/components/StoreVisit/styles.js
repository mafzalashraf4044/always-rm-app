import { StyleSheet, Dimensions } from "react-native";
import { getSizeWRTDeviceWidth } from "../../utils";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
  storeVisit: {
    flex: 1,
		height: deviceHeight,
  },
  storeImgContainer: {
    flex: 0.4,
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
  textbox: {
    marginTop: getSizeWRTDeviceWidth(20),
  },
  coulmns1: {
  
  },
  coulmns2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  widthHalf: {
    width: "48%",
  },
  visitForm: {
    flex: 0.6,
    justifyContent: "space-between",
    backgroundColor: "#FFF",
  },
  scrollView: {
    height: "100%",
    backgroundColor: "#FFF",
  },
  formView: {
    flex: 1,
    justifyContent: "space-between",
    padding: getSizeWRTDeviceWidth(15),
    backgroundColor: "#FFF",
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
    marginBottom: getSizeWRTDeviceWidth(15),
  },
  switchTxt: {
    color: "rgba(233,30,99,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(16),
    lineHeight: getSizeWRTDeviceWidth(20),
  },
  merchInfoTxt: {
    color: "rgba(155,155,155,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
  addCompetitorBtn: {
    width: getSizeWRTDeviceWidth(200),
    paddingVertical: getSizeWRTDeviceWidth(10),
    paddingHorizontal: getSizeWRTDeviceWidth(20),
    backgroundColor: "rgba(233,30,99,1)",
  },
  addCompetitorBtnTxt: {
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
  },
  startBtn: {
    width: "100%",
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
  addCourseBtn: {
    width: getSizeWRTDeviceWidth(140),
    paddingVertical: getSizeWRTDeviceWidth(10),
    paddingHorizontal: getSizeWRTDeviceWidth(20),
    backgroundColor: "rgba(233,30,99,1)",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
  },
  addCourseBtnTxt: {
    color: "#FFF",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
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
