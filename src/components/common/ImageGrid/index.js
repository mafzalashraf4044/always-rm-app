import * as React from "react";

import {
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { ImagePicker, Permissions } from "expo";

//	redux
import { connect } from "react-redux";
import { uploadImage, setIsLoading } from "../../../actions";

import styles from "./styles";

export interface Props {
  navigation: any;
  images: array;
  isAddEnabled: boolean;
}

export interface State {}

class ImageGrid extends React.Component<Props, State> {

  openCamera = () => {
    Permissions.askAsync(Permissions.CAMERA).then((camera) => {
      if (camera.status === "granted") {
        Permissions.askAsync(Permissions.CAMERA_ROLL).then((cameraRoll) => {
          if (cameraRoll.status === "granted") {
            ImagePicker.launchCameraAsync({
              allowsEditing: false,
              quality: 0.1,
            }).then((result) => {
              if (!result.cancelled) {
                this.props.setIsLoading(true);
                this.props.uploadImage(result.uri).then((res) => {
                  if (res.status === 200) {
                    this.props.saveCapturedImg(res.data[0]);
                  }
                  this.props.setIsLoading(false);
                }).catch((err) => {
                  this.props.setIsLoading(false);
                  throw new Error(err);
                });
              }
            });
          }
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.imageGrid}>
        {
          this.props.images.map((image, index) => (
            <View style={[styles.imgContainer]} key={index}>
              <Image
                style={styles.img}
                source={{uri: image.url}}
              />
            </View>
          ))
        }
        {
          (this.props.isAddEnabled || this.props.addEnabledDependency) &&
          <View style={styles.addBtnContainer}>
            <TouchableOpacity onPress={this.openCamera} style={styles.addBtn}>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => {
	return {
    uploadImage: image => dispatch(uploadImage(image)),
    setIsLoading: isLoading => dispatch(setIsLoading(isLoading)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
