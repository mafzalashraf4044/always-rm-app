import { StyleSheet, Dimensions } from "react-native";
import { getSizeWRTDeviceWidth } from "../../utils";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
  loader: {
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
  },
});

export default styles;
