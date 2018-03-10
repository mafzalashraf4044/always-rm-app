import { Dimensions, StyleSheet, PixelRatio } from "react-native";
import { getSizeWRTPercentage } from '../../../utils';

const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	header: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: "transparent",
		height: getSizeWRTPercentage(48),
		marginTop: getSizeWRTPercentage(15),
		marginHorizontal: getSizeWRTPercentage(15),
	},
	headerIcon: {
		width: getSizeWRTPercentage(30),
		resizeMode: "contain",
	},
	body: {
		width: deviceWidth - getSizeWRTPercentage(60),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginLeft: getSizeWRTPercentage(15),
	},
	title: {
		color: "#FFF",
		fontFamily: "Always_Font",
		fontSize: getSizeWRTPercentage(18),
		lineHeight: getSizeWRTPercentage(20),
	},
	right: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'flex-end',
	},
	rightIcon: { 
		width: getSizeWRTPercentage(30),
		resizeMode: "contain",
	}
});
export default styles;
