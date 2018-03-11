import * as React from "react";
import {
	Container,
	Content,
} from "native-base";
import { NavigationActions } from "react-navigation";

import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

export interface Props {
	navigation: any,
}
export interface State {}

export default class Sidebar extends React.Component<Props, State> {

  listItems = [
    {icon: require("../../assets/Icons/Dark/Stores.png"), name: "My Stores", route: "Stores"},
    {icon: require("../../assets/Icons/Dark/Report.png"), name: "Reports", route: "Reports"},
    {icon: require("../../assets/Icons/Dark/Calendar.png"), name: "My Calendar", route: "MyCalendar"},
    {icon: require("../../assets/Icons/Dark/Merchandise.png"), name: "Merchandising", route: "Merchandising"},
  ];

	renderItem = ({item}) => {
		return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(item.route)} style={styles.listItem}>
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
						<TouchableOpacity style={styles.headerIconWrapper}>
							<Image
								style={styles.headerIcon}
								source={require("../../assets/Icons/Light/Edit.png")}
							/>
            </TouchableOpacity>
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.name}>John Doe</Text>
						<Text style={styles.email}>johndoe.always@gmail.com</Text>
					</View>
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
