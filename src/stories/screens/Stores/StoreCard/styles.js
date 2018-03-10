import { StyleSheet } from "react-native";
import { getSizeWRTPercentage } from '../../../../utils';

const styles: any = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(254,254,254,1)',
    borderRadius: 5,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 3 },
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		elevation: 1,
    margin: getSizeWRTPercentage(15),
  },
  imgContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    height: getSizeWRTPercentage(192),
  },
  storeImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: getSizeWRTPercentage(192),
  },
  storeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getSizeWRTPercentage(15),
    paddingVertical: getSizeWRTPercentage(10),
  },
  infoText: {

  },
  storeID: {
    color: "rgba(228,228,228,1)",
		fontFamily: "Always_Font",
    fontSize: getSizeWRTPercentage(10),
    lineHeight: getSizeWRTPercentage(12),
  },
  storeName: {
    color: "rgba(255,255,255,1)",
		fontFamily: "Always_Font",
    fontSize: getSizeWRTPercentage(20),
    fontWeight: "400",
    lineHeight: getSizeWRTPercentage(24),

  },
  storeManager: {
    color: "rgba(255,255,255,1)",
		fontFamily: "Always_Font",
    fontSize: getSizeWRTPercentage(10),
    lineHeight: getSizeWRTPercentage(12),
  },
  lastSaved: {
    color: "rgba(202,202,202,1)",
		fontFamily: "Always_Font",
    fontStyle: "italic",
    fontSize: getSizeWRTPercentage(10),
    lineHeight: getSizeWRTPercentage(12),
    marginTop: getSizeWRTPercentage(5)
  },
  editIconContainer: {

  },
  editIcon: {
    width: getSizeWRTPercentage(30),
    resizeMode: "contain",
  },
  cardBody: {
    width: '100%',
    paddingHorizontal: getSizeWRTPercentage(15),
    paddingVertical: getSizeWRTPercentage(10),
  },
  extraInfo: {
    
  },
  address: {
    color: "rgba(74,74,74,1)",
		fontFamily: "Always_Font",
    fontSize: getSizeWRTPercentage(12),
    lineHeight: getSizeWRTPercentage(14),
  },
  stepsCompleted: {
    color: "rgba(155,155,155,1)",
		fontFamily: "Always_Font",
    fontStyle: "italic",
    fontSize: getSizeWRTPercentage(10),
    lineHeight: getSizeWRTPercentage(12),
    marginTop: getSizeWRTPercentage(10)
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: getSizeWRTPercentage(15),
  },
  txtBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  txtBtn: {
    color: "rgba(233,30,99,1)",
		fontFamily: "Always_Font",
    fontSize: getSizeWRTPercentage(14),
    lineHeight: getSizeWRTPercentage(16),
    marginRight: getSizeWRTPercentage(15),
  },
  expandIcon: {
    width: getSizeWRTPercentage(30),
    resizeMode: "contain",
  },
  collapsable: {
    
  },
  storeDetails: {
    color: "rgba(74,74,74,1)",
		fontFamily: "Always_Font",
    textAlign: 'justify',
    fontSize: getSizeWRTPercentage(12),
    lineHeight: getSizeWRTPercentage(16),
  }

});
export default styles;
