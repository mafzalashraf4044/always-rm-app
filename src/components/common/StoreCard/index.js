import React from "react";

import {
  Animated,
  View,
  Text,
  Image,
  Linking,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
import {Image as CacheableImage} from "react-native-expo-image-cache";

export interface Props {
	navigation: any,
	formType: string,
}

class StoreCard extends React.Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      isCollapsableOpen: false,
      collapsableAnimation: new Animated.Value(),
      maxHeight: null,
    };
  }

  componentDidMount = async () => {
    try {
      const plannerInfo = JSON.parse(await AsyncStorage.getItem(`planner-info-${this.props.assignedRoutePlanner.id}`));

      if (plannerInfo !== null) {
        this.setState({
          savedOn: plannerInfo.savedOn,
          stepCompletedTxt: plannerInfo.stepCompletedTxt,
        });
      }
     } catch (error) {
       // Error retrieving data
     }
  }

  toggleCollapsable = () => {
    const animateTo = this.state.isCollapsableOpen ? 0 : this.state.maxHeight;

    this.setState(prevState => ({
      isCollapsableOpen: !prevState.isCollapsableOpen,
    }));

    Animated.timing(
      this.state.collapsableAnimation,
      {toValue: animateTo, duration: 500}
    ).start();
  }

  setMaxHeight = (event) => {
    if (this.state.maxHeight === null) {
      this.setState({
          maxHeight: event.nativeEvent.layout.height,
      }, () => {
        this.state.collapsableAnimation.setValue(0);
      });
    }
  }

  callToStoreContactNumber = (number) => {
    Linking.openURL(`tel:${number}`);
  }

  smsToStoreContactNumber = (number) => {
    Linking.openURL(`sms:${number}`);
  }

  render() {
    let store = null;

    if (this.props.assignedRoutePlanner) {
      store = this.props.assignedRoutePlanner.store;
    } else {
      store = this.props.store;
    }

    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
        {
          store.image && store.image.url ?
          <CacheableImage
            style={styles.storeImg}
            {...{uri: store.image.url}}
          /> : null
        }

          <View style={styles.storeInfo}>
            <View style={styles.infoText}>
              <Text style={styles.storeID}>Store ID: {store.id}</Text>
              <Text style={styles.storeName} numberOfLines={1}>{store.name}</Text>
              <Text style={styles.storeManager}>Store Manager: {store.primaryManagerName}</Text>

              {
                this.state.savedOn ?
                <Text style={styles.lastSaved}>Last saved on {this.state.savedOn}</Text> : null
              }
            </View>
            <View style={styles.editIconContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("AddEditStore", {isEdit: true, store})}>
                <Image
                  style={styles.editIcon}
                  source={require("../../../assets/Icons/Light/Edit.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.extraInfo}>
            <Text style={styles.address}>{store.addressLine1}</Text>
            <Text style={styles.address}>{store.addressLine2}</Text>
            <Text style={styles.address}>{store.country.name}</Text>
            {
              this.state.stepCompletedTxt ?
              <Text style={styles.stepsCompleted}>{this.state.stepCompletedTxt}</Text> : null
            }
          </View>

          <View style={styles.actions}>
            {
              this.props.completed ?
              <View style={styles.txtBtnsContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.formRoute, {formType: this.props.formType, assignedRoutePlanner: this.props.assignedRoutePlanner})}>
                  <Text style={styles.txtBtn}>VIEW</Text>
                </TouchableOpacity>
              </View> :
              <View style={styles.txtBtnsContainer}>
                {
                  this.props.reassignAvailable ?
                  <TouchableOpacity onPress={this.props.toggleReassignModal}>
                    <Text style={styles.txtBtn}>TRANSFER</Text>
                  </TouchableOpacity> :
                  <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.formRoute, {formType: this.props.formType, assignedRoutePlanner: this.props.assignedRoutePlanner})}>
                    <Text style={styles.txtBtn}>VISIT</Text>
                  </TouchableOpacity>
                }

                <TouchableOpacity onPress={() => this.callToStoreContactNumber(store.contactPhone)}>
                  <Text style={styles.txtBtn}>CALL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.smsToStoreContactNumber(store.contactPhone)}>
                  <Text style={styles.txtBtn}>MESSAGE</Text>
                </TouchableOpacity>
              </View>
            }
            <TouchableOpacity onPress={this.toggleCollapsable}>
              <Image
                style={styles.expandIcon}
                source={require("../../../assets/Icons/Dark/Expand.png")}
              />
            </TouchableOpacity>
          </View>

          <Animated.View style={{height: this.state.collapsableAnimation, overflow: "hidden"}}>
            <View onLayout={this.setMaxHeight} style={styles.collapsable}>
              <Text style={styles.storeDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default StoreCard;
