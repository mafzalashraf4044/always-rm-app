import { StyleSheet, Dimensions } from "react-native";
import { getSizeWRTDeviceWidth } from "../../../utils";

const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
  imageGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  imgContainer: {
    marginBottom: getSizeWRTDeviceWidth(4),
    width: ((deviceWidth - getSizeWRTDeviceWidth(30)) / 3) - getSizeWRTDeviceWidth(4),
    height: ((deviceWidth - getSizeWRTDeviceWidth(30)) / 3) - getSizeWRTDeviceWidth(4),
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  addBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: getSizeWRTDeviceWidth(4),
    width: ((deviceWidth - getSizeWRTDeviceWidth(30)) / 3) - getSizeWRTDeviceWidth(4),
    height: ((deviceWidth - getSizeWRTDeviceWidth(30)) / 3) - getSizeWRTDeviceWidth(4),
    borderColor: "rgba(232,232,232,1)",
    borderWidth: 1,
  },
  addBtn: {
    borderRadius: 50,
    backgroundColor: "rgba(233,30,99,1)",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "50%",
    shadowColor: "#000",
		shadowOffset: { width: 2, height: 3 },
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		elevation: 1,
  },
  addBtnIcon: {
		width: getSizeWRTDeviceWidth(30),
		resizeMode: "cover",
  },
});
export default styles;
