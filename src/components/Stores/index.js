import * as React from "react";

import {
	Image,
} from "react-native";

import {
	Tab,
	Tabs,
	Content,
	Container,
} from "native-base";

import Header from "../common/Header";
import StoreCard from "../common/StoreCard";
import StoreFilter from "../common/StoreFilter";

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
					source={require("../../assets/Images/app-bg.jpeg")}
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
							onPress: () => this.props.navigation.navigate("SearchStores"),
						},
						{
							url: require("../../assets/Icons/Light/Add.png"),
							onPress: () => this.props.navigation.navigate("AddEditStore", {isEdit: false}),
						}
					]}
        />

				<Tabs initialPage={0} transparent>
					<Tab heading="Outstanding">
						<Container>
							<Content>
								<StoreCard navigation={this.props.navigation}/>
								<StoreCard navigation={this.props.navigation}/>
								<StoreCard navigation={this.props.navigation}/>
							</Content>
						</Container>
					</Tab>
					<Tab heading="Today">
						<Container>
							<Content>
								<StoreCard navigation={this.props.navigation}/>
								<StoreCard navigation={this.props.navigation}/>
								<StoreCard navigation={this.props.navigation}/>
							</Content>
						</Container>
					</Tab>
					<Tab heading="Upcoming">
						<Container>
							<StoreFilter />
							<Content style={styles.tabContentWithFilter}>
								<StoreCard navigation={this.props.navigation}/>
								<StoreCard navigation={this.props.navigation}/>
								<StoreCard navigation={this.props.navigation}/>
							</Content>
						</Container>
					</Tab>
					<Tab heading="Completed">
						<Container>
							<StoreFilter />
							<Content style={styles.tabContentWithFilter}>
								<StoreCard navigation={this.props.navigation}/>
								<StoreCard navigation={this.props.navigation}/>
								<StoreCard navigation={this.props.navigation}/>
							</Content>
						</Container>
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

export default Stores;
