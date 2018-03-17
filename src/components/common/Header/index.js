import * as React from "react";

import {
  Item,
	Input,
} from "native-base";

import { Dimensions, View, TouchableOpacity, Image, Text } from "react-native";

import styles from "./styles";

import { getSizeWRTDeviceWidth } from '../../../utils';

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
    const {title, iconLeft, iconsRight, navigation} = this.props;
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
              this.props.title !== 'searchBox' ?
              <Text style={styles.title}>{this.props.title}</Text> :
              <Item light>
                <Input
                  secureTextEntry={false}
                  onBlur={this.handleBlur}
                  onFocus={this.handleFocus}
                />
              </Item>
            }
          </View>
          {
            iconsRight.length > 0 &&
            <View style={styles.right} onLayout={this.onRightIconsLayout}>
              {
                iconsRight.map((icon, index) => (
                  <TouchableOpacity onPress={icon.onPress} key={index}>
                    <Image
                      style={styles.rightIcon}
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
