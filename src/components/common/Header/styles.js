import { Dimensions, StyleSheet, PixelRatio } from "react-native";
import { getSizeWRTDeviceWidth } from '../../../utils';

const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	header: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: "transparent",
		height: getSizeWRTDeviceWidth(48),
		marginTop: getSizeWRTDeviceWidth(15),
		marginHorizontal: getSizeWRTDeviceWidth(15),
	},
	headerIcon: {
		width: getSizeWRTDeviceWidth(30),
		resizeMode: "contain",
	},
	body: {
		width: deviceWidth - getSizeWRTDeviceWidth(60),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginLeft: getSizeWRTDeviceWidth(15),
	},
	title: {
		color: "#FFF",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTDeviceWidth(18),
		lineHeight: getSizeWRTDeviceWidth(20),
	},
	right: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'flex-end',
	},
	rightIcon: { 
		width: getSizeWRTDeviceWidth(30),
		resizeMode: "contain",
	}
});
export default styles;
