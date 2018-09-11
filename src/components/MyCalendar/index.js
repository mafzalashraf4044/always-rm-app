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
import { Calendar } from "../common/Calendar";

import styles from "./styles";
import { getSizeWRTDeviceWidth } from "../../utils";

export interface Props {
  navigation: any,
}

class MyCalendar extends React.Component<Props> {

	state = {
		date: "2018-06-30",
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
          title="Calendar"
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

				<ScrollView style={{flex: 1, backgroundColor: "#FFF"}} endFillColor="#fff">
					<View style={styles.calendarContainer}>
						<Calendar
							onDayPress={(day) => this.setState({date: day.dateString})}
							markedDates={{
								[this.state.date]: {selected: true, marked: false, selectedColor: "rgba(233,30,99,0.55)"},
							}}
							theme={{
								backgroundColor: "#ffffff",
								calendarBackground: "#ffffff",
								textMonthFontWeight: "bold",
								textSectionTitleColor: "rgba(0,0,0,1)",
								todayTextColor: "rgba(0,0,0,0.87)",
								arrowColor: "rgba(117,117,117,1)",
								dayTextColor: "rgba(0,0,0,0.87)",
								monthTextColor: "rgba(0,0,0,0.87)",
								textDayFontFamily: "Roboto",
								textMonthFontFamily: "Roboto",
								textDayHeaderFontFamily: "Roboto",
								textDayFontSize: getSizeWRTDeviceWidth(12),
								textMonthFontSize: getSizeWRTDeviceWidth(12),
								textDayHeaderFontSize: getSizeWRTDeviceWidth(12)
							}}
						/>
					</View>
					<View style={styles.divider} />
					<View style={styles.eventsContainer}>
						<View style={styles.eventsHeading}>
							<Text style={styles.eventsHeadingText}>Events</Text>
						</View>
						<View style={styles.event}>
							<View style={styles.store}>
								<View style={styles.storeInfo}>
									<Text style={styles.storeName}>Harvey Norman</Text>
									<Text style={styles.address}>960 Yishun Central #B2-101/203 S(760960)</Text>
									<Text style={styles.address}>Northpoint Shopping Centre</Text>
									<Text style={styles.address}>Singapore</Text>
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

export default MyCalendar;
