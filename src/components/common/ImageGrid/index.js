import * as React from "react";

import {
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { ImagePicker, FileSystem, Permissions } from 'expo';

import styles from "./styles";

export interface Props {
  navigation: any;
  images: array;
  isAddEnabled: boolean;
}

export interface State {}

class ImageGrid extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });

    if (!result.cancelled) {
      try {
        FileSystem.copyAsync({
          from: result.uri,
          to: `${FileSystem.documentDirectory}image.jpg`,
        }).then(() => {
          this.setState({ images: [...this.state.images, `${FileSystem.documentDirectory}image.jpg`] });
        });
      } catch (e) {
        alert(JSON.stringify(e));
      }
    }
  };

  render() {
    return (
      <View style={styles.imageGrid}>
        {
          this.state.images.map((image, index) => (
            <View style={[styles.imgContainer]} key={index}>
              <Image
                style={styles.img}
                source={{uri: image}}
              />
            </View>
          ))
        }
        {
          this.props.isAddEnabled &&
          <View style={styles.addBtnContainer}>
            <TouchableOpacity onPress={this._pickImage} style={styles.addBtn}>
              <Image
                style={styles.addBtnIcon}
                source={require("../../../assets/Icons/Light/Add.png")}
              />
            </TouchableOpacity>
          </View>
        }
      </View>
		);
	}
}

export default ImageGrid;
