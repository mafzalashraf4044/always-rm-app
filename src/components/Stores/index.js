import * as React from "react";
import {
	Container,
	Content,
	Tabs,
	Tab
} from "native-base";

import { TouchableOpacity, Image, Text } from "react-native";

import StoreCard from "./StoreCard";
import Header from '../common/Header';

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class Stores extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<Image
					blurRadius={5}
					style={styles.backgroundImg}
					source={require("../../assets/Images/header-bg.jpeg")}
				/>
        <Header
          title="My Stores"
          navigation={this.props.navigation}
          iconLeft={{
						url: require("../../assets/Icons/Light/Menu.png"),
						onPress: () => this.props.navigation.navigate("DrawerOpen"),
					}}
          iconsRight={[
						{
							url: require("../../assets/Icons/Light/Search.png"),
							onPress: () => {},
						},
						{
							url: require("../../assets/Icons/Light/Add.png"),
							onPress: () => this.props.navigation.navigate("AddStore"),
						}
					]}
        />

				<Tabs initialPage={1} transparent>
					<Tab heading="Outstanding">
						<Container>
							<Content>
								<StoreCard />
								<StoreCard />
								<StoreCard />
							</Content>
						</Container>
					</Tab>
					<Tab heading="Today">
						<Container>
							<Content>
								<StoreCard />
								<StoreCard />
								<StoreCard />
							</Content>
						</Container>
					</Tab>
					<Tab heading="Upcoming">
						<Container>
							<Content>
								<StoreCard />
								<StoreCard />
								<StoreCard />
							</Content>
						</Container>
					</Tab>
					<Tab heading="Completed">
						<Container>
							<Content>
								<StoreCard />
								<StoreCard />
								<StoreCard />
							</Content>
						</Container>
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

export default Stores;
