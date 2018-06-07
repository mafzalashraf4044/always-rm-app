import { Dimensions, Platform } from "react-native";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight =
  Platform.OS === "android" ? Dimensions.get("window").height - 24 : Dimensions.get("window").height;

export const getSizeWRTDeviceWidth = (size) => {
  return (size / 375) * deviceWidth;
};

export const getSizeWRTDeviceHeight = (size) => {
  return (size / 667) * deviceHeight;
};