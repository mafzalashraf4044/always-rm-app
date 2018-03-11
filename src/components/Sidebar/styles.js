import { StyleSheet, PixelRatio, Dimensions } from "react-native";
import { getSizeWRTPercentage } from '../../utils';

const styles: any = StyleSheet.create({
	header: {
    flex: 0.35,
    padding: getSizeWRTPercentage(10),
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
    width: getSizeWRTPercentage(30),
    resizeMode: "contain",
  },
  userInfo: {
    width: "100%",
  },
  name: {
    color: "#fff",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTPercentage(18),
  },
  email: {
    color: "rgba(223,223,223,1)",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTPercentage(12),
  },
  content: {
    flex: 0.5,
  },
  listItemView: {
    paddingHorizontal: getSizeWRTPercentage(20),
    paddingTop: getSizeWRTPercentage(10),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listItemIcon: {
    width: getSizeWRTPercentage(30),
  },
  listItemTxt: {
    color: "rgba(74,74,74,1)",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTPercentage(14),
    marginLeft: getSizeWRTPercentage(22),
  },
  footer: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingBottom: getSizeWRTPercentage(10)
  }
});
export default styles;
