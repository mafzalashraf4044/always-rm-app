import { Dimensions, StyleSheet, PixelRatio } from "react-native";
import { getSizeWRTDeviceWidth, getSizeWRTDeviceHeight } from '../../../utils';

const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	header: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: "transparent",
		height: getSizeWRTDeviceHeight(48),
		marginTop: getSizeWRTDeviceHeight(24),
		marginBottom: getSizeWRTDeviceHeight(10),
		paddingLeft: getSizeWRTDeviceWidth(20),
		paddingRight: getSizeWRTDeviceWidth(20),
	},
	headerIcon: {
		width: getSizeWRTDeviceWidth(30),
		resizeMode: "cover",
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
		marginLeft: getSizeWRTDeviceWidth(30),
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
		resizeMode: "cover",
	}
});
export default styles;
