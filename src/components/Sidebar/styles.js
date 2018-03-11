import { StyleSheet, PixelRatio, Dimensions } from "react-native";
import { getSizeWRTDeviceWidth } from '../../utils';

const styles: any = StyleSheet.create({
	header: {
    flex: 0.35,
    padding: getSizeWRTDeviceWidth(10),
    justifyContent: "space-between",
    backgroundColor: "rgba(233,30,99,1)",
  },
  headerIconsWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: {
    width: getSizeWRTDeviceWidth(30),
    resizeMode: "contain",
  },
  userInfo: {
    width: "100%",
  },
  name: {
    color: "#fff",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(18),
  },
  email: {
    color: "rgba(223,223,223,1)",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(12),
  },
  content: {
    flex: 0.5,
  },
  listItem: {
    paddingHorizontal: getSizeWRTDeviceWidth(15),
    paddingTop: getSizeWRTDeviceWidth(15),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listItemIcon: {
    width: getSizeWRTDeviceWidth(30),
  },
  listItemTxt: {
    color: "rgba(74,74,74,1)",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    marginLeft: getSizeWRTDeviceWidth(22),
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
