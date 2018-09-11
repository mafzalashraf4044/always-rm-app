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

const INITIAL_PAGE_INDEX = 1;

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
					<Tabs
						transparent
						initialPage={INITIAL_PAGE_INDEX}
						onChangeTab={this.props.getRoutePlanners}
					>
						{
							this.props.rcrTabs.map((rcrTab, index) => (
								<Tab heading={rcrTab.heading} key={index}>
									<ScrollView style={styles.tabContent} {...(rcrTab.heading === "Completed" ? {scrollEnabled: this.state.isScrollEnabled} : {})}>
										{
											rcrTab.heading === "Completed" ?
											<StoreFilter toggleScrollEnabled={this.toggleScrollEnabled} index={index} getRoutePlanners={this.props.getRoutePlanners} /> : null
										}
										<View style={rcrTab.heading === "Completed" ? styles.withFilter : styles.withoutFilter}>
											{
												rcrTab.routePlanners.map((assignedRoutePlanner, i) => (
													<StoreCard
														key={i}
														formRoute="StoreVisit"
														{...(rcrTab.heading === "Completed" ? {completed: true} : {})}
														{...(rcrTab.heading === "Upcoming" ? {reassignAvailable: true, toggleReassignModal: this.toggleReassignModal} : {})}
														formType={this.props.formType}
														navigation={this.props.navigation}
														assignedRoutePlanner={assignedRoutePlanner}
													/>
												))
											}

											{
												rcrTab.routePlanners.length === 0 ?
												<View style={styles.noStoresTextContainer}>
													<Text style={styles.noStoresText}>No assigned stores found.</Text>
												</View> : null
											}
										</View>
									</ScrollView>
								</Tab>
							))
						}
					</Tabs> : null
				}

				{
					this.props.formType === MY_STORES.MERCHANDISERS ?
					<ScrollView endFillColor="#fff">
						<View style={styles.storesContainer}>
							{
								this.props.assignedRoutePlanners.map((assignedRoutePlanner, index) => (
									<StoreCard navigation={this.props.navigation} formType={this.props.formType} assignedRoutePlanner={assignedRoutePlanner} key={index} formRoute="StoreVisit" />
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
