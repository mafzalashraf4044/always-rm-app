import { StyleSheet, PixelRatio } from "react-native";

const styles: any = StyleSheet.create({
	header: {
    flex: 0.35,
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
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
    width: PixelRatio.getPixelSizeForLayoutSize(22),
    resizeMode: "contain",
  },
  userInfo: {
    width: "100%",
  },
  name: {
    color: "#fff",
    fontFamily: "Always_Font",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(18),
  },
  email: {
    color: "rgba(223,223,223,1)",
    fontFamily: "Always_Font",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
  },
  content: {
    flex: 0.5,
  },
  listItemView: {
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(20),
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(10),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listItemIcon: {
    width: PixelRatio.getPixelSizeForLayoutSize(22),
  },
  listItemTxt: {
    color: "rgba(74,74,74,1)",
    fontFamily: "Always_Font",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(22),
  },
  footer: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10)
  }
});
export default styles;
