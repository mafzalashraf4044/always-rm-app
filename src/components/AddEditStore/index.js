import * as React from "react";

import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";

import { Button } from "native-base";
import { TextField } from "react-native-material-textfield";

import Header from "../common/Header";
import { Dropdown } from "../common/Dropdown";

import styles from "./styles";
import { getSizeWRTDeviceWidth } from "../../utils";

export interface Props {
	navigation: any;
}

class AddEditStore extends React.Component<Props> {

	render() {
		const { params } = this.props.navigation.state;
		const textFieldProps = {
			lineWidth:0,
			textColor:"#000",
			baseColor:"rgba(147,147,147,1)",
			tintColor:"rgba(147,147,147,1)",
			fontSize:getSizeWRTDeviceWidth(14),
			labelFontSize:getSizeWRTDeviceWidth(12),
			inputContainerStyle:{borderBottomWidth: 0.8, borderBottomColor: "#000", marginTop: getSizeWRTDeviceWidth(-15)},
		};
		return (
      <ScrollView
        endFillColor="#fff"
        style={styles.addEditStore}
      >
				<KeyboardAvoidingView behavior="padding" enabled>
					<View style={styles.storeImgContainer}>
						{
							params.isEdit &&
							<Image
								blurRadius={5}
								style={styles.backgroundImg}
								source={require("../../assets/Images/header-bg.jpeg")}
							/>
						}
						<Header
							title={params.isEdit ? "Edit Store" : "Add Store"}
							navigation={this.props.navigation}
							iconLeft={{
								url: require("../../assets/Icons/Light/Back.png"),
								onPress: () => this.props.navigation.goBack(),
							}}
						/>
						<TouchableOpacity onPress={() => {}}>
							<View style={styles.addEditImg}>
								<Image
									style={styles.cameraIcon}
									source={require("../../assets/Icons/Light/Camera.png")}
								/>
								<Text style={styles.addEditImgTxt}>Add store image</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.formView}>
						<View style={styles.formSection}>
							<View style={styles.sectionHeadingContainer}>
								<Text style={styles.sectionHeadingTxt}>Add Store Details</Text>
							</View>
							<View style={styles.coulmns1}>
								<TextField
									label="Store Name"
									{...textFieldProps}
									value={this.props.store.name}
									onChangeText={(value) => this.props.handleChange("name", value)}
								/>
							</View>
							<View style={styles.coulmns2}>
								<View style={styles.widthHalf}>
									<TextField
										label="Store ID"
										{...textFieldProps}
										value={this.props.store.storeID}
										onChangeText={(value) => this.props.handleChange("storeID", value)}
									/>
								</View>
								<View style={styles.widthHalf}>
									<Dropdown
										fullWidth={false}
										label="Store Status"
										data={[{
											value: "active",
											label: "Active",
										}, {
											value: "Inactive",
											label: "inactive",
										}]}
									/>
								</View>
							</View>
							<View style={styles.coulmns1}>
								<TextField
									label="Retailer Name"
									{...textFieldProps}
									value={this.props.store.retailerName}
									onChangeText={(value) => this.props.handleChange("retailerName", value)}
								/>
							</View>
							<View style={styles.coulmns1}>
								<TextField
									label="Store Manager"
									{...textFieldProps}
									value={this.props.store.primaryManagerName}
									onChangeText={(value) => this.props.handleChange("primaryManagerName", value)}
								/>
							</View>
							<View style={styles.coulmns1}>
								<TextField
									label="Store Manager Contact Number"
									{...textFieldProps}
									value={this.props.store.managerContact}
									onChangeText={(value) => this.props.handleChange("managerContact", value)}
								/>
							</View>
						</View>
						<View style={styles.formSection}>
							<View style={styles.sectionHeadingContainer}>
								<Text style={styles.sectionHeadingTxt}>Add Store Address</Text>
							</View>
							<View style={styles.coulmns1}>
								<TextField
									label="Address Line 1"
									{...textFieldProps}
									value={this.props.store.addressLine1}
									onChangeText={(value) => this.props.handleChange("addressLine1", value)}
								/>
							</View>
							<View style={styles.coulmns1}>
								<TextField
									label="Address Line 2 (Optional)"
									{...textFieldProps}
									value={this.props.store.addressLine2}
									onChangeText={(value) => this.props.handleChange("addressLine2", value)}
								/>
							</View>
							<View style={styles.coulmns1}>
								<TextField
									label="Postal Code"
									{...textFieldProps}
									value={this.props.store.postalCode}
									onChangeText={(value) => this.props.handleChange("postalCode", value)}
								/>
							</View>
							<View style={styles.coulmns1}>
								<TextField
									label="Computer Mall"
									{...textFieldProps}
									value={this.props.store.computerMall}
									onChangeText={(value) => this.props.handleChange("computerMall", value)}
								/>
							</View>
							<View style={styles.coulmns1}>
								<Dropdown
									fullWidth
									label="Country"
									{...textFieldProps}
									value={this.props.store.country}
									data={this.props.countries}
									onChangeText={(value) => this.props.handleChange("country", value)}
								/>
							</View>
						</View>

						<View style={styles.formActions}>
							<Button onPress={() => this.props.navigation.goBack()} style={styles.lightBtn}>
								<Text style={styles.lightBtnTxt}>CANCEL</Text>
							</Button>
							<Button onPress={this.props.saveStore} style={styles.darkBtn}>
								<Text style={styles.darkBtnTxt}>SAVE</Text>
							</Button>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		);
	}
}

export default AddEditStore;
