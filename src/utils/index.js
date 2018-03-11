import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const getSizeWRTDeviceWidth = (size) => {
  return (size / 375) * deviceWidth;
};

export const getSizeWRTDeviceHeight = (size) => {
  return (size / 667) * deviceHeight;
};