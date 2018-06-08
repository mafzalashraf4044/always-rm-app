import * as React from "react";

import {
  View,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import { Container } from "native-base";

import Header from "../common/Header";

import styles from "./styles";

export interface Props {
  navigation: any,
  user: obj,
}

class Home extends React.Component<Props> {

	constructor(props) {
		super(props);

    this.homeTabs = [
      {icon: require("../../assets/Icons/Light/Stores.png"), name: "My Stores", route: "Stores"},
      {icon: require("../../assets/Icons/Light/Report.png"), name: "Reports", route: "Reports"},
      {icon: require("../../assets/Icons/Light/Calendar.png"), name: "My Calendar", route: "MyCalendar"},
      {icon: require("../../assets/Icons/Light/Merchandise.png"), name: "SKU Analysis", route: "SKU Analysis"},
    ];
	}

  render() {
    return (
      <Container style={styles.container}>
        <Image
          blurRadius={5}
          style={styles.backgroundImg}
          source={require("../../assets/Images/app-bg.jpeg")}
        />
        <Header
          title={this.props.user && `Welcome ${this.props.user.username}!`}
          navigation={this.props.navigation}
          iconLeft={{
						url: require("../../assets/Icons/Light/Menu.png"),
						onPress: () => this.props.navigation.navigate("DrawerOpen"),
					}}
        />
        <View style={styles.content}>
          <View style={styles.homeTabs}>
            {
              this.homeTabs.map((tab, index) => {
                return (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate(tab.route)} key={tab.name}>
                    <View style={[styles.homeTab, tab.name === "Merchandising" ? styles.homeTabBright : {}]}>
                      <Image
                        style={styles.tabIcon}
                        source={tab.icon}
                      />
                      <Text style={styles.homeTabTxt}>{tab.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            }
          </View>
          <View style={styles.homeInfo}>
            <View style={styles.lastLogin}>
              <Text style={styles.lastLoginTxt}> Last Login 23/10/2018 3:44pm</Text>
            </View>
            <View style={styles.logosContainer}>
              <Image
                style={styles.logo1}
                source={require("../../assets/Images/logo-always.png")}
              />
              <Image
                style={styles.logo2}
                source={require("../../assets/Images/logo-intel.png")}
              />
            </View>
          </View>
        </View>

      </Container>
    );
  }
}

export default Home;
