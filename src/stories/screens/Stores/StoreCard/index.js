import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import styles from './styles';

class StoreCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.storeImg}
            source={{uri: "http://globalmedicalco.com/photos/globalmedicalco/15/72747.jpg"}}
          />
          <View style={styles.storeInfo}>
            <View style={styles.infoText}>
              <Text style={styles.storeID}>Store ID: 124124</Text>
              <Text style={styles.storeName}>Hervy Norman</Text>
              <Text style={styles.storeManager}>Store Manager: Alwyn Lao</Text>
              <Text style={styles.lastSaved}>Last saved on 14/02/2018 / 1:24:11pm</Text>
            </View>
            <View style={styles.editIconContainer}>
              <TouchableOpacity>
                <Image
                  style={styles.editIcon}
                  source={require("../../../../assets/Icons/Light/Edit.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.extraInfo}>
            <Text style={styles.address}>960 Yishun Central # B2-101/102 S(760960)</Text>
            <Text style={styles.address}>Northpoint Shopping Center</Text>
            <Text style={styles.address}>Singapore</Text>
            <Text style={styles.stepsCompleted}>Step 2 of 5 completed</Text>
          </View>

          <View style={styles.actions}>
            <View style={styles.txtBtnsContainer}>
              <TouchableOpacity>
                <Text style={styles.txtBtn}>RE-VISIT</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.txtBtn}>CALL</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.txtBtn}>MESSAGE</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image
                style={styles.expandIcon}
                source={require("../../../../assets/Icons/Dark/Expand.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.collapsable}>
            <Text style={styles.storeDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
          </View>

        </View>
      </View>
    );
  }
}

export default StoreCard;
