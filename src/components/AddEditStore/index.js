/**
 * @author Afzal Ashraf <afzalashraf.dev@gmail.com>
 */

// @flow
import * as React from "react";

import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";

//	third party componenets
import { Button, ActionSheet } from "native-base";
import {Image as CacheableImage} from "react-native-expo-image-cache";
import { TextField } from "react-native-material-textfield";

//	custom components
import Header from "../common/Header";
import { Dropdown } from "../common/Dropdown";

//	styles
import styles from "./styles";

//	utils
import { getSizeWRTDeviceWidth } from "../../utils";

//	constants
const STORE_STATUS_LIST = [
	{
		value: "New",
		label: "New",
	},
	{
		value: "Updated",
		label: "Updated",
	},
	{
		value: "Active",
		label: "Active",
	},
	{
		value: "Inactive",
		label: "Inactive",
	},
	{
		value: "Closed",
		label: "Closed",
	},
];

const FIRST_INDEX = 0;

const BUTTONS = [
  { text: "Camera", icon: "camera", iconColor: "#000" },
  { text: "Gallery", icon: "film", iconColor: "#000" },
  { text: "Cancel", icon: "close", iconColor: "#000" }
];

const CAMERA_INDEX = 0;
const GALLERY_INDEX = 1;
const CANCEL_INDEX = 2;

export interface Props {
	store: obj,
	saveStore: func,
	pickImage: func,
	openCamera: func,
	countries: array,
	handleChange: func,
	navigation: obj,
}

class AddEditStore extends React.Component<Props> {

  showActionSheet = () => {
		ActionSheet.show(
			{
				options: BUTTONS,
				cancelButtonIndex: CANCEL_INDEX,
				title: "Store Image"
			},
			buttonIndex => {
				if (buttonIndex === CAMERA_INDEX) {
					this.props.openCamera();
				} else if (buttonIndex === GALLERY_INDEX) {
          this.props.pickImage();
				}
			}
		);
	}

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
			<KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="position" enabled keyboardVerticalOffset={-80}>
				<ScrollView
					endFillColor="#fff"
					style={styles.addEditStore}
				>
					<View style={styles.storeImgContainer}>
						{
							(this.props.store.image && this.props.store.image.url) ?
							<CacheableImage
								style={styles.backgroundImg}
								{...{uri: this.props.store.image.url}}
							/> :
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
						<TouchableOpacity onPress={this.showActionSheet}>
							<View style={styles.addEditImg}>
								<Image
									style={styles.cameraIcon}
									source={require("../../assets/Icons/Light/Camera.png")}
								/>
								<Text style={styles.addEditImgTxt}>{params.isEdit ? "Edit" : "Add"} store image</Text>
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
							<View style={styles.coulmns1}>
								<TextField
									multiline
									label="Store Description"
									{...textFieldProps}
									value={this.props.store.description}
									onChangeText={(value) => this.props.handleChange("description", value)}
								/>
							</View>
							{
								params.isEdit ?
								<View style={styles.coulmns2}>
									<View style={styles.widthHalf}>
										<TextField
											label="Store ID"
											{...textFieldProps}
											value={this.props.store.id}
											onChangeText={(value) => this.props.handleChange("id", value)}
										/>
									</View>
									<View style={styles.widthHalf}>
										<Dropdown
											fullWidth={false}
											label="Store Status"
											value={this.props.store.status}
											data={STORE_STATUS_LIST}
											onChangeText={(value) => this.props.handleChange("status", value)}
										/>
									</View>
								</View> :
								<View style={styles.coulmns1}>
									<Dropdown
										fullWidth={false}
										label="Store Status"
										value={this.props.store.status}
										data={STORE_STATUS_LIST}
										onChangeText={(value) => this.props.handleChange("status", value)}
									/>
								</View>
							}
							{
								this.props.store.retails ?
								<View style={styles.coulmns1}>
									<TextField
										label="Retailer Name"
										{...textFieldProps}
										value={this.props.store.retails[FIRST_INDEX].name}
										onChangeText={(value) => this.props.handleChange("retailerName", value)}
									/>
								</View> : null
							}
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
									value={this.props.store.contactPhone}
									onChangeText={(value) => this.props.handleChange("contactPhone", value)}
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
									value={typeof this.props.store.country === "string" ? this.props.store.country : JSON.stringify(this.props.store.country)}
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
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}

export default AddEditStore;
