import * as React from "react";

import {
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";

import { Container } from "native-base";

import styles from "./styles";

export interface Props {
	navigation: any,
	user: obj,
	removeUserIfLogingOut: func,
}

class Sidebar extends React.Component<Props> {

	constructor(props) {
		super(props);

		this.listItems = [
			{icon: require("../../assets/Icons/Dark/Merchandise.png"), name: "Home", route: "Home" },
			{icon: require("../../assets/Icons/Dark/Stores.png"), name: "My Stores", route: "MyStores"},
			{icon: require("../../assets/Icons/Dark/Report.png"), name: "Reports", route: "Reports"},
			{icon: require("../../assets/Icons/Dark/Calendar.png"), name: "My Calendar", route: "MyCalendar"},
			{icon: require("../../assets/Icons/Dark/Merchandise.png"), name: "SKU Analysis", route: "SKUAnalysis"},
			{icon: require("../../assets/Icons/Dark/Merchandise.png"), name: "Notifications", route: "Notifications" },
		];
	}

	handleListItemPress = (route) => {
		this.props.removeUserIfLogingOut(route).then(() => {
			this.props.navigation.navigate(route)
		});
	}

	renderItem = ({item}) => {
		return (
      <TouchableOpacity onPress={() => this.handleListItemPress(item.route)} style={styles.listItem}>
				<Image
					style={styles.listItemIcon}
					source={item.icon}
				/>
				<Text style={styles.listItemTxt}>
					{item.name}
				</Text>
      </TouchableOpacity>
		);
	}

	render() {
		const { user } = this.props;

		return (
			<Container style={styles.sidebar}>
        <View style={styles.header}>
					<View style={styles.headerIconsWrapper}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerClose")} style={styles.headerIconWrapper}>
							<Image
								style={styles.headerIcon}
								source={require("../../assets/Icons/Light/Back.png")}
							/>
            </TouchableOpacity>
					</View>
					{
						this.props.user ?
						<View style={styles.userInfo}>
							<Text style={styles.name}>{user.username}</Text>
							<Text style={styles.email}>{user.email}</Text>
						</View> : null
					}
        </View>

				<View style={styles.content}>
					<FlatList
						data={this.listItems}
						renderItem={this.renderItem}
						keyExtractor={item => item.name}
					/>
				</View>
				<View style={styles.footer}>
					<FlatList
						data={[{icon: require("../../assets/Icons/Dark/Exit.png"), name: "Log Out", route: "Login"}]}
						renderItem={this.renderItem}
						keyExtractor={item => item.name}
					/>
				</View>
			</Container>
		);
	}
}

export default Sidebar;
