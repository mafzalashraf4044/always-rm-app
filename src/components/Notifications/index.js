import * as React from "react";

import {
	Image,
	View,
	Text,
	Animated,
	ScrollView,
	TouchableOpacity,
} from "react-native";

import Header from "../common/Header";

import styles from "./styles";

export interface Props {
  navigation: any,
}

class Notifications extends React.Component<Props> {

	state = {
		isCollapsableOpen: false,
		collapsableAnimation: new Animated.Value(),
		maxHeight: null,
	};

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

	render() {
		return (
			<View style={styles.container}>
				<Image
					blurRadius={5}
					style={styles.backgroundImg}
					source={require("../../assets/Images/app-bg.jpeg")}
				/>
        <Header
          title="Notifications"
          navigation={this.props.navigation}
          iconLeft={{
						url: require("../../assets/Icons/Light/Menu.png"),
						onPress: () => this.props.navigation.navigate("DrawerOpen"),
					}}
          iconsRight={[
						{
							url: require("../../assets/Icons/Light/Search.png"),
							onPress: () => this.props.navigation.navigate("SearchStores"),
						},
						{
							url: require("../../assets/Icons/Light/Add.png"),
							onPress: () => this.props.navigation.navigate("AddEditStore", {isEdit: false}),
						}
					]}
        />

				<ScrollView endFillColor="#fff">
					<View style={styles.divider} />
					<View style={styles.eventsContainer}>
						<View style={styles.event}>
							<View style={styles.store}>
								<View style={styles.storeInfo}>
									<Text style={styles.storeName}>Latest Notification Title</Text>
									<Text style={styles.address}>Sent on 02/04/2018 3:44:21pm</Text>
								</View>

								<TouchableOpacity onPress={this.toggleCollapsable}>
									<Image
										style={styles.expandIcon}
										source={require("../../assets/Icons/Dark/Expand.png")}
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
				</ScrollView>
			</View>
		);
	}
}

export default Notifications;
