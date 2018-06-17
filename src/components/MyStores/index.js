import * as React from "react";

import {
	Image,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from "react-native";

import {
	Tab,
	Tabs,
} from "native-base";
import Modal from "react-native-modal";

import Header from "../common/Header";
import StoreCard from "../common/StoreCard";
import StoreFilter from "../common/StoreFilter";
import { Dropdown } from "../common/Dropdown";

import styles from "./styles";

import { MY_STORES } from "../../constants";


export interface Props {
	navigation: any,
	formType: string,
}

class MyStores extends React.Component<Props> {

	constructor(props) {
		super(props);

		this.state = {
			isReassignModalOpen: false,
			isScrollEnabled: true,
		};
	}

	toggleReassignModal = () => {
		this.setState(prevState => ({
			isReassignModalOpen: !prevState.isReassignModalOpen,
		}));
	}

	toggleScrollEnabled = () => {
		this.setState(prevState => ({
			isScrollEnabled: !prevState.isScrollEnabled,
		}));
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

				{
					this.props.formType === MY_STORES.RCR ?
					<Tabs initialPage={0} transparent>
						<Tab heading="Outstanding">
							<ScrollView style={styles.tabContent}>
								<View style={styles.withoutFilter}>
									{
										this.props.stores.map((store, index) => (
											<StoreCard navigation={this.props.navigation} formType={this.props.formType} store={store} key={index} />
										))
									}
								</View>
							</ScrollView>
						</Tab>
						<Tab heading="Today">
							<ScrollView style={styles.tabContent}>
								<View style={styles.withoutFilter}>
									{
										this.props.stores.map((store, index) => (
											<StoreCard navigation={this.props.navigation} formType={this.props.formType} store={store} key={index} />
										))
									}
								</View>
							</ScrollView>
						</Tab>
						<Tab heading="Upcoming">
							<ScrollView style={styles.tabContent} scrollEnabled={this.state.isScrollEnabled}>
								<StoreFilter toggleScrollEnabled={this.toggleScrollEnabled}/>
								<View style={styles.withFilter}>
									{
										this.props.stores.map((store, index) => (
											<StoreCard
												key={index}
												store={store}
												reassignAvailable
												formType={this.props.formType}
												navigation={this.props.navigation}
												toggleReassignModal={this.toggleReassignModal}
											/>
										))
									}
								</View>
							</ScrollView>
						</Tab>
						<Tab heading="Completed">
							<ScrollView style={styles.tabContent} scrollEnabled={this.state.isScrollEnabled}>
								<StoreFilter toggleScrollEnabled={this.toggleScrollEnabled} />
								<View style={styles.withFilter}>
									{
										this.props.stores.map((store, index) => (
											<StoreCard
												key={index}
												store={store}
												formType={this.props.formType}
												navigation={this.props.navigation}
											/>
										))
									}
								</View>
							</ScrollView>
						</Tab>
					</Tabs> : null
				}

				{
					this.props.formType === MY_STORES.MERCHANDISERS ?
					<ScrollView endFillColor="#fff">
						<View style={styles.storesContainer}>
							{
								this.props.stores.map((store, index) => (
									<StoreCard navigation={this.props.navigation} formType={this.props.formType} store={store} key={index} />
								))
							}
						</View>
					</ScrollView> : null
				}


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
			</View>
		);
	}
}

export default MyStores;
