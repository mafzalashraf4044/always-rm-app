import { StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight, deviceWidth, deviceHeight } from "../../utils";

const styles: any = StyleSheet.create({
  keyboardAvoidingView: {
    backgroundColor: "#FFF",
  },
  skuVisit: {
    backgroundColor: "#FFF",
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
    backgroundColor: "#FFF",
  },




  skuListHeadingContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: getSizeWRTDeviceWidth(10),
  },
  skuList: {

  },
  skuListItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(74,74,74,1)",
    paddingVertical: getSizeWRTDeviceWidth(8),
  },
  skuListItemOem: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  skuListItemOemTxt: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontWeight: "500",
    textAlign: "center",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
  },
  skuListItemModelInfo: {
    width: "45%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  skuListItemSeriesTxt: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
  },
  skuListItemModelNoTxt: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
  },
  skuListItemEditBtnContainer: {
    width: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  skuListItemEditBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: getSizeWRTDeviceWidth(62),
    height: getSizeWRTDeviceWidth(36),
    backgroundColor: "rgba(233,30,99,1)",
  },
  skuListItemEditBtnTxt: {
    color: "#FFF",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
  },
  columns: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    width: "48%",
  },






















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
    backgroundColor: "#FFF",
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
  addIcon: {
    width: getSizeWRTDeviceWidth(22),
    resizeMode: "contain",
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
  signature: {
    width: "100%",
    height: getSizeWRTDeviceHeight(136),
    borderWidth: 1,
    borderColor: "rgba(235,235,235,1)",
  },
  signatureText: {
    color: "rgba(147,147,147,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
  },
  signatureContainer: {
    alignItems: "flex-end",
    position: "relative",
  },
  clearSignatureBtn: {
    backgroundColor: "rgba(233,30,99,1)",
    width: getSizeWRTDeviceWidth(20),
    height: getSizeWRTDeviceWidth(20),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
  },
  clearSignatureIcon: {
    width: getSizeWRTDeviceWidth(14),
    resizeMode: "contain",
  },
  addOneMoreBtnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: getSizeWRTDeviceWidth(10),
  },
  addOneMoreBtnContainerWithFieldsetDGFS: {
    justifyContent: "flex-start",
    marginTop: getSizeWRTDeviceWidth(5),
    marginBottom: getSizeWRTDeviceWidth(20),
  },
  addOneMoreBtnContainerWithFieldsetDGFE: {
    justifyContent: "flex-end",
    marginTop: getSizeWRTDeviceWidth(-10),
    marginBottom: getSizeWRTDeviceWidth(20),
  },
  addOneMoreBtn: {
    justifyContent: "center",
    alignItems: "center",
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
    height: getSizeWRTDeviceWidth(46),
    paddingBottom: getSizeWRTDeviceWidth(10),
  },
  startBtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: getSizeWRTDeviceWidth(36),
    paddingVertical: getSizeWRTDeviceWidth(10),
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
    backgroundColor: "rgba(233,30,99,1)",
  },
  darkBtnTxt: {
    color: "#FFF",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
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
	submissionModalActions: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: getSizeWRTDeviceWidth(10),
	},
  submissionModalActionBtn: {
    paddingVertical: getSizeWRTDeviceWidth(10),
    paddingHorizontal: getSizeWRTDeviceWidth(20),
    backgroundColor: "rgba(233,30,99,1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submissionModalActionBtnTxt: {
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },

});

export default styles;
