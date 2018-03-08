import { StyleSheet, PixelRatio } from "react-native";

const styles: any = StyleSheet.create({
	header: {
    flex: 0.3,
    padding: 50 / PixelRatio.getPixelSizeForLayoutSize(1),
    justifyContent: "space-between",
    backgroundColor: "rgba(233,30,99,1)",
  },
  headerIconsWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25 / PixelRatio.getPixelSizeForLayoutSize(1),
  },
  headerIcon: {
    width: 28,
    resizeMode: "contain",
  },
  userInfo: {
    width: "100%",
  },
  name: {
    fontSize: PixelRatio.getFontScale() * 28,
    color: "#fff",
  },
  email: {
    fontSize: PixelRatio.getFontScale() * 12,
    color: "#fff",
  },
  content: {
    flex: 0.55,
  },
  listItemView: {
    paddingTop: 80 / PixelRatio.getPixelSizeForLayoutSize(1),
    paddingHorizontal: 65 / PixelRatio.getPixelSizeForLayoutSize(1),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listItemIcon: {
    width: 30,
  },
  listItemTxt: {
    fontSize: PixelRatio.getFontScale() * 16,
    color: "#000",
    marginLeft: 80 / PixelRatio.getPixelSizeForLayoutSize(1),
  },
  footer: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingBottom: 80 / PixelRatio.getPixelSizeForLayoutSize(1)
  }
});
export default styles;
