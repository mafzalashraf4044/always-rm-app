import { StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight, deviceHeight } from "../../../utils";

const styles: any = StyleSheet.create({
  storeFilter: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 100,
    maxHeight: deviceHeight / 2,
  },
  storeFilterSelected: {
    width: "100%",
    height: getSizeWRTDeviceHeight(36),
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  storeFilterSelectedTxt: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
  },
  dropdownIcon: {
    width: getSizeWRTDeviceWidth(22),
    resizeMode: "contain",
  },
  collapsable: {
    width: "100%",
    backgroundColor: "#FFF",
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
    marginBottom: 10,
  },
  listItem: {
    width: "100%",
    height: getSizeWRTDeviceHeight(56),
    borderBottomWidth: 1,
    borderBottomColor: "rgba(74,74,74,1)",
    justifyContent: "center",
    alignItems: "center",
  },
  listItemTxt: {
    color: "rgba(74,74,74,1)",
    backgroundColor: "transparent",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
  }

});
export default styles;
