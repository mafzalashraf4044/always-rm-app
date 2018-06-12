import { StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth } from "../../utils";

const styles: any = StyleSheet.create({
	header: {
    flex: 0.27,
    justifyContent: "space-between",
    padding: getSizeWRTDeviceWidth(16),
    paddingTop: getSizeWRTDeviceWidth(24),
    backgroundColor: "rgba(233,30,99,1)",
  },
  headerIconsWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerIcon: {
		width: getSizeWRTDeviceWidth(30),
		resizeMode: "cover",
  },
  userInfo: {
    width: "100%",
  },
  name: {
    color: "#fff",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(24),
    lineHeight: getSizeWRTDeviceWidth(30),
  },
  email: {
    color: "rgba(223,223,223,1)",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
    lineHeight: getSizeWRTDeviceWidth(14),
  },
  content: {
    flex: 0.58,
  },
  listItem: {
    paddingHorizontal: getSizeWRTDeviceWidth(20),
    paddingTop: getSizeWRTDeviceWidth(10),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listItemIcon: {
		width: getSizeWRTDeviceWidth(30),
		resizeMode: "cover",
  },
  listItemTxt: {
    color: "rgba(74,74,74,1)",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
    marginLeft: getSizeWRTDeviceWidth(24),
  },
  footer: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingBottom: getSizeWRTDeviceWidth(10)
  }
});
export default styles;
