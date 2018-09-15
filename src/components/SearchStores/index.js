import React from "react";

import {
	View,
	Text,
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

	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
		};
	}

  handleSearchTermChange = (searchTerm) => {
    this.setState({
      searchTerm,
    });
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
					key="search"
					onSearchTermChange={this.handleSearchTermChange}
					navigation={this.props.navigation}
					searchTerm={this.state.searchTerm}
					handleSearchTermChange={this.handleSearchTermChange}
          iconLeft={{
						url: require("../../assets/Icons/Light/Back.png"),
						onPress: () => this.props.navigation.goBack(),
					}}
          iconsRight={[
						{
							url: require("../../assets/Icons/Light/Search.png"),
							onPress: () => this.props.searchStores(this.state.searchTerm),
						},
					]}
        />

        <ScrollView endFillColor="#fff" style={styles.scrollView}>
          <View style={styles.container}>
						{
							this.props.stores.map((store, index) => (
								<StoreCard
									key={index}
									store={store}
									navigation={this.props.navigation}
								/>
							))
						}

						{
							this.props.stores.length === 0 ?
							<View style={styles.noStoresTextContainer}>
								<Text style={styles.noStoresText}>No stores found.</Text>
							</View> : null
						}
          </View>
        </ScrollView>
			</View>
		);
	}
}

export default SearchStores;
