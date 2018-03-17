import * as React from "react";

import { View, TouchableOpacity, Image, Text } from "react-native";

import styles from "./styles";

export interface Props {
  navigation: any;
  images: array;
  isAddEnabled: boolean;
}
export interface State {}
class ImageGrid extends React.Component<Props, State> {
  render() {

    return (
      <View style={styles.imageGrid}>
        {
          this.props.images.map((image, index) => (
            <View style={styles.imgContainer} key={index}>
              <Image
                style={styles.img}
                source={image}
              />
            </View>
          ))
        }
        {
          this.props.isAddEnabled &&
          <View style={styles.addBtnContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.addBtn}>
              <Image
                style={styles.addBtnIcon}
                source={require('../../../assets/Icons/Light/Add.png')}
              />
            </TouchableOpacity>
          </View>
        }
      </View>
		);
	}
}

export default ImageGrid;
