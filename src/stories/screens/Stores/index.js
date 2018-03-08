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

import { Image } from "react-native";

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
						<Button transparent>
							<Icon
								active
								name="menu"
								onPress={() => this.props.navigation.navigate("DrawerOpen")}
							/>
						</Button>
					</Left>
					<Body>
						<Title>My Stores</Title>
					</Body>
					<Right />
				</Header>

				<Tabs initialPage={1}>
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
