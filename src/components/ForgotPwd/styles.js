import { Platform, Dimensions, StyleSheet } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight } from '../../utils';

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	forgotPwdScreen: {
		flex: 1,
		height: Platform.OS === "ios" ? deviceHeight : deviceHeight - 20,
	},
	forgotView: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	formContainer: {
    flex: 1,
    justifyContent: 'center',
		width: getSizeWRTDeviceWidth(230),
	},
  formActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lightBtn: {
    marginRight: getSizeWRTDeviceWidth(15),
    backgroundColor: "transparent",
		shadowColor: "#FFF",
		elevation: 0,
  },
  lightBtnTxt: {
    color: "#FFF",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
  darkBtn: {
    paddingVertical: getSizeWRTDeviceWidth(10),
    paddingHorizontal: getSizeWRTDeviceWidth(20),
    backgroundColor: "rgba(233,30,99,1)",
  },
  darkBtnTxt: {
    color: "#FFF",
    fontFamily: "Always_Font",
    fontSize: getSizeWRTDeviceWidth(14),
    lineHeight: getSizeWRTDeviceWidth(16),
  },
});
export default styles;
