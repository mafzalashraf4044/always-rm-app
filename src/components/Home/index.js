import * as React from "react";
import {
  Container,
  Content,
  Button,
} from "native-base";

import { View, Image, Text, TouchableOpacity } from "react-native";

import Header from '../common/Header';

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  homeTabs = [
    {icon: require("../../assets/Icons/Light/Stores.png"), name: "My Stores", route: "Stores"},
    {icon: require("../../assets/Icons/Light/Report.png"), name: "Reports", route: "Reports"},
    {icon: require("../../assets/Icons/Light/Calendar.png"), name: "My Calendar", route: "MyCalendar"},
    {icon: require("../../assets/Icons/Light/Merchandise.png"), name: "Merchandising", route: "Merchandising"},
  ];

  render() {
    return (
      <Container style={styles.container}>
        <Image
          blurRadius={5}
          style={styles.backgroundImg}
          source={require("../../assets/Images/app-bg.jpg")}
        />
        <Header
          title="Welcome John Doe!"
          navigation={this.props.navigation}
          iconLeft={require("../../assets/Icons/Light/Menu.png")}
        />
        <Content>
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
        </Content>

      </Container>
    );
  }
}

export default Home;
