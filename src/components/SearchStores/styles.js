import { Dimensions, StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight } from '../../utils';

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
  container: {
    height: deviceHeight,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  scrollView: {
    height: deviceHeight - getSizeWRTDeviceHeight(82),
  },
  container: {
    flex: 1,
    paddingBottom: getSizeWRTDeviceHeight(30),
    backgroundColor: '#FFF',
  },
});

export default styles;