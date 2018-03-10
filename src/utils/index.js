import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

export const getSizeWRTPercentage = (size) => {
  return (size / 320) * deviceWidth;
};