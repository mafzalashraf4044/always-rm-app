import * as React from "react";

import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { TextField } from "react-native-material-textfield";

import styles from "./styles";
import { getSizeWRTDeviceWidth } from "../../../utils";

const deviceWidth = Dimensions.get("window").width;

export interface Props {
  navigation: any;
  title: string;
  iconLeft: string;
  iconsRight: array;
}

export interface State {}

class Header extends React.Component<Props, State> {

  static defaultProps = {
    iconsRight: [],
  };

  state = {
    rightIconsWidth: 0,
  };

  onRightIconsLayout = (event) => {
    this.setState({
      rightIconsWidth: event.nativeEvent.layout.width,
    });
  }

  render() {
    const {title, iconLeft, iconsRight} = this.props;
		const textFieldProps = {
			lineWidth:0,
			textColor:"#fff",
			baseColor:"rgba(183,183,183,1)",
			tintColor:"rgba(183,183,183,1)",
			fontSize:getSizeWRTDeviceWidth(14),
			labelFontSize:getSizeWRTDeviceWidth(12),
      inputContainerStyle:{borderBottomWidth: 0.8, borderBottomColor: "#FFF", marginTop: getSizeWRTDeviceWidth(-25), width: deviceWidth - this.state.rightIconsWidth - getSizeWRTDeviceWidth(90)},
      containerStyle: { width: deviceWidth - this.state.rightIconsWidth - getSizeWRTDeviceWidth(90)}
    };

    return (
      <View style={styles.header}>
        <View style={styles.left}>
          <TouchableOpacity onPress={iconLeft.onPress}>
            <Image
              style={styles.headerIcon}
              source={iconLeft.url}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={[styles.center, {width: deviceWidth - this.state.rightIconsWidth - getSizeWRTDeviceWidth(90)}]}>
            {
              title !== "searchBox" ?
              <Text style={styles.title}>{title}</Text> :
              <View>
                <TextField
                  label=""
                  placeholder="Search Stores..."
                  {...textFieldProps}
                  value={this.props.searchTerm}
                  onChangeText={this.props.handleSearchTermChange}
                />
              </View>
            }
          </View>
          {
            iconsRight.length > 0 &&
            <View style={styles.right} onLayout={this.onRightIconsLayout}>
              {
                iconsRight.map((icon, index) => (
                  <TouchableOpacity onPress={icon.onPress} key={index}>
                    <Image
                      style={styles.headerIcon}
                      source={icon.url}
                    />
                  </TouchableOpacity>
                ))
              }
            </View>
          }
        </View>
      </View>
		);
	}
}

export default Header;
