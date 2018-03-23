import * as React from "react";

import {
	Image,
	View,
	Text,
	TouchableOpacity,
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

import { Dropdown } from "../common/Dropdown";
import Modal from "react-native-modal";

import styles from "./styles";

export interface Props {
	navigation: any;
}

export interface State {}

class Stores extends React.Component<Props, State> {

	state = {
		isReassignModalOpen: false,
	};

	toggleReassignModal = () => {
		this.setState(prevState => ({
			isReassignModalOpen: !prevState.isReassignModalOpen,
		}));
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
								<StoreCard navigation={this.props.navigation} toggleReassignModal={this.toggleReassignModal}/>
								<StoreCard navigation={this.props.navigation} toggleReassignModal={this.toggleReassignModal}/>
								<StoreCard navigation={this.props.navigation} toggleReassignModal={this.toggleReassignModal}/>
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

        <Modal
					isVisible={this.state.isReassignModalOpen}
					style={styles.modalContainer}
				>
          <View style={styles.modal}>
						<View style={styles.header}>
							<Text style={styles.headerTxt}>Request Transfer?</Text>
						</View>
            <View style={styles.body}>
              <Text style={styles.bodyTxt}>You are requesting for a Visit Transfer for Harvey Norman on 05/04/2018.</Text>

							<View style={styles.dropdownContainer}>
								<Dropdown
									fullWidth
									label="Reason"
									data={[{
										value: "Vacation",
									}, {
										value: "Unwell",
									}]}
								/>
							</View>

							<View style={styles.modalActions}>
								<TouchableOpacity
									onPress={() => {
										this.toggleReassignModal(!this.state.isReassignModalOpen);
									}}>
									<Text style={styles.actionBtnTxt}>CANCEL</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => {}}>
									<Text style={styles.actionBtnTxt}>REQUEST FOR TRANSFER</Text>
								</TouchableOpacity>
							</View>
            </View>
          </View>
        </Modal>
			</Container>
		);
	}
}

export default Stores;
