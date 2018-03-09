import * as React from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	Left,
	Right,
	Body,
	Tabs,
	Tab
} from "native-base";

import { TouchableOpacity, Image, Text } from "react-native";

import StoreCard from "./StoreCard";

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
					source={require("../../../assets/Images/app-bg.jpg")}
				/>
				<Header transparent hasTabs>
					<Left>
						<TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
							<Image
								style={styles.headerIcon}
								source={require("../../../assets/Icons/Light/Menu.png")}
							/>
						</TouchableOpacity>
					</Left>
					<Body>
						<Text style={styles.headerTitle}>My Stores</Text>
					</Body>
					<Right>
						<TouchableOpacity onPress={() => {}}>
							<Image
								style={styles.headerIcon}
								source={require("../../../assets/Icons/Light/Search.png")}
							/>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => {}}>
							<Image
								style={styles.headerIcon}
								source={require("../../../assets/Icons/Light/Add.png")}
							/>
						</TouchableOpacity>
					</Right>
				</Header>

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
