import { StyleSheet, PixelRatio } from "react-native";

const styles: any = StyleSheet.create({
	header: {
    flex: 0.35,
    padding: PixelRatio.getPixelSizeForLayoutSize(10) / PixelRatio.get(),
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
    width: PixelRatio.getPixelSizeForLayoutSize(22) / PixelRatio.get(),
    resizeMode: "contain",
  },
  userInfo: {
    width: "100%",
  },
  name: {
    color: "#fff",
    fontFamily: "Always_Font",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(18) / PixelRatio.get(),
  },
  email: {
    color: "rgba(223,223,223,1)",
    fontFamily: "Always_Font",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12) / PixelRatio.get(),
  },
  content: {
    flex: 0.5,
  },
  listItemView: {
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(20) / PixelRatio.get(),
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(10) / PixelRatio.get(),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listItemIcon: {
    width: PixelRatio.getPixelSizeForLayoutSize(22) / PixelRatio.get(),
  },
  listItemTxt: {
    color: "rgba(74,74,74,1)",
    fontFamily: "Always_Font",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14) / PixelRatio.get(),
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(22) / PixelRatio.get(),
  },
  footer: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10) / PixelRatio.get()
  }
});
export default styles;
