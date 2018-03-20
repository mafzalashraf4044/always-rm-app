import React, { Component } from "react";

import {
	View,
	Image,
	ScrollView,
} from "react-native";

import Header from "../common/Header";
import StoreCard from "../common/StoreCard";

import styles from "./styles";

class SearchStores extends Component {
	render() {
		return (
			<View style={styles.searchStores}>
				<Image
					blurRadius={5}
					style={styles.backgroundImg}
					source={require("../../assets/Images/app-bg.jpeg")}
				/>
        <Header
          title="searchBox"
          navigation={this.props.navigation}
          iconLeft={{
						url: require("../../assets/Icons/Light/Back.png"),
						onPress: () => this.props.navigation.goBack(),
					}}
          iconsRight={[
						{
							url: require("../../assets/Icons/Light/Search.png"),
							onPress: () => {},
						},
					]}
        />

        <ScrollView endFillColor="#fff" style={styles.scrollView}>
          <View style={styles.container}>
            <StoreCard navigation={this.props.navigation}/>
            <StoreCard navigation={this.props.navigation}/>
          </View>
        </ScrollView>
			</View>
		);
	}
}

export default SearchStores;
