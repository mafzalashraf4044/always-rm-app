import { StyleSheet, Platform } from "react-native";
import { getSizeWRTDeviceWidth } from '../../../../utils';

export default StyleSheet.create({
  accessory: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  triangle: {
    width: 7,
    height: 7,
    transform: [{
      translateY: -4,
    }, {
      rotate: "45deg",
    }],
  },

  triangleContainer: {
    width: 12,
    height: 6,
    overflow: "hidden",
    alignItems: "center",

    backgroundColor: "transparent", /* XXX: Required */
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
  },

  picker: {
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    borderRadius: 2,

    position: "absolute",

    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowColor: "rgba(0, 0, 0, 1.0)",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
      },

      android: {
        elevation: 2,
      },
    }),
  },

  item: {
    textAlign: "left",
  },

  scroll: {
    flex: 1,
    borderRadius: 2,
  },

  scrollContainer: {
    paddingVertical: 8,
  },
});
