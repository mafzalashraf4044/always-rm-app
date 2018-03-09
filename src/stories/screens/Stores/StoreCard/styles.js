import { StyleSheet, PixelRatio } from "react-native";

const styles: any = StyleSheet.create({
  storeCard: {
    borderRadius: 5,
    margin: PixelRatio.getPixelSizeForLayoutSize(15) / PixelRatio.get()
  }
});
export default styles;
