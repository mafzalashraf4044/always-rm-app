import * as React from "react";

import { View, TouchableOpacity, Image, Text } from "react-native";

import styles from "./styles";

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

  render() {
    const {title, iconLeft, iconsRight, navigation} = this.props;
    return (
      <View style={styles.header}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
            <Image
              style={styles.headerIcon}
              source={iconLeft}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          {
            iconsRight.length > 0 &&
            <View style={styles.right}>
              {
                iconsRight.map((icon, index) => (
                  <TouchableOpacity onPress={() => {}} key={index}>
                    <Image
                      style={styles.rightIcon}
                      source={icon}
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
