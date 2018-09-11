import React from "react";

import {
	View,
	Image,
	ScrollView,
} from "react-native";

import Header from "../common/Header";
import StoreCard from "../common/StoreCard";

import styles from "./styles";

export interface Props {
  navigation: any,
}

class SearchStores extends React.Component<Props> {

	state = {
		store: {
			name: "Harvey Norman",
			status: "Active",
			id: "12345",
			image: null,
			primaryManagerName: "Alwyn Lao",
			contactPhone: "",
			addressLine1: "960 Yishun Central #B2-101/203 S(760960)",
			addressLine2: "Northpoint Shopping Centre",
			postalCode: "",
			computerMall: "",
			country: "",
			updatedAt: "14/02/2018 01:24:33pm",
			retails: [
				{name: ""},
			],
		},
	}

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
            <StoreCard
							store={this.state.store}
							navigation={this.props.navigation}
						/>
          </View>
        </ScrollView>
			</View>
		);
	}
}

export default SearchStores;
