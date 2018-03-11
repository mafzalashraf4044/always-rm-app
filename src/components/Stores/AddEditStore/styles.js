import { Platform, StyleSheet, Dimensions } from "react-native";
import { getSizeWRTPercentage } from '../../../utils';

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
  addEditStore: {
		flex: 1,
		height: Platform.OS === "ios" ? deviceHeight : deviceHeight - 20,
  },
  storeImgContainer: {
		flex: 0.5,
    justifyContent: 'space-between',
    backgroundColor: "rgba(183,183,183,1)",
  },
  addEditImg: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: getSizeWRTPercentage(15),
  },
  cameraIcon: {
    width: getSizeWRTPercentage(30),
    resizeMode: "contain",
  },
  addEditImgTxt: {
    color: "#FFF",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTPercentage(14),
    lineHeight: getSizeWRTPercentage(16),
    marginLeft: getSizeWRTPercentage(10),
  },
  formView: {
    flex: 1,
    padding: getSizeWRTPercentage(15),
    backgroundColor: "#FFF",
  },
  coulmns1: {
  },
  coulmns2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  widthHalf: {
    width: "45%",
  },
  formSection: {

  },
  sectionHeadingContainer: {
    marginTop: getSizeWRTPercentage(25),
    marginBottom: getSizeWRTPercentage(15),
  },
  sectionHeadingTxt: {
    color: "rgba(233,30,99,1)",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTPercentage(16),
    lineHeight: getSizeWRTPercentage(20),
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdownIcon: {
    width: getSizeWRTPercentage(20),
    resizeMode: "contain",
    position: 'absolute',
    right: getSizeWRTPercentage(6),
    bottom: getSizeWRTPercentage(6),
  }
});
export default styles;
