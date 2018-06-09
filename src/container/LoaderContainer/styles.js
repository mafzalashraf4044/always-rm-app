import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../utils";

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
