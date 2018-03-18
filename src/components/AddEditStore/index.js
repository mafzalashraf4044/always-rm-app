import * as React from "react";
import {
	Container,
	Item,
	Input,
	Form,
	Label,
	Button
} from "native-base";
import { getSizeWRTDeviceWidth } from '../../utils';
import Header from '../common/Header';

import { TextField } from 'react-native-material-textfield';
import { Dropdown } from '../common/Dropdown';
import { View, KeyboardAvoidingView, ScrollView, TouchableOpacity, Image, Text } from "react-native";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class AddEditStore extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			isStoreImgContainerVisible: true,
			storeName: "",
			storeID: "",
			retailerName: "",
			managerName: "",
			managerContact: "",
			address1: "",
			address2: "",
			postalCode: "",
			computerMall: "",
			country: "",
		};
	}

	componentDidMount() {
		const { params } = this.props.navigation.state;
		if (params.isEdit) {
			this.setState({
				storeName: "Amaro Studio Pte. Ltd.",
				storeID: "124124",
				retailerName: "Asus Hardware",
				managerName: "Alwyn Lao",
				managerContact: "98731134",
				address1: "960 Yishun Central #B2-101/102",
				address2: "-",
				postalCode: "760960",
				computerMall: "Cause Shopping Center",
				country: "Singapore",
			});
		}
	}

	handleFocus = () => {
		this.setState({isStoreImgContainerVisible: false});
	}

	handleBlur = () => {
		this.setState({isStoreImgContainerVisible: true});
	}

	handleChange = (key, value) => {
		this.setState({
			[key]: value
		});
	}

	render() {
		const { params } = this.props.navigation.state;
		const textFieldProps = {
			lineWidth:0,
			textColor:"#000",
			baseColor:"rgba(147,147,147,1)",
			tintColor:"rgba(147,147,147,1)",
			fontSize:getSizeWRTDeviceWidth(14),
			labelFontSize:getSizeWRTDeviceWidth(14) - 2,
			inputContainerStyle:{borderBottomWidth: 0.8, borderBottomColor: "#000", marginTop: getSizeWRTDeviceWidth(-15)},
		};
		return (
			<Container style={styles.addEditStore}>
				{
					this.state.isStoreImgContainerVisible && 
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
				}
					<ScrollView endFillColor="#fff" style={styles.ScrollView}>
						<View style={styles.formView}>
							<View style={styles.formSection}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>Add Store Details</Text>
								</View>
								<View style={styles.coulmns1}>
									<TextField
										label="Store Name"
										{...textFieldProps}
										value={this.state.storeName}
										onChangeText={(value) => this.handleChange('storeName', value)}
									/>
								</View>
								<View style={styles.coulmns2}>
									<View style={styles.widthHalf}>
										<TextField
											label="Store ID"
											{...textFieldProps}
											value={this.state.storeID}
											onChangeText={(value) => this.handleChange('storeID', value)}
										/>
									</View>
									<View style={styles.widthHalf}>
										<Dropdown
											label='Store Status'
											data={[{
												value: 'Active',
											}, {
												value: 'Inactive',
											}]}
										/>
									</View>
								</View>
								<View style={styles.coulmns1}>
									<TextField
										label="Retailer Name"
										{...textFieldProps}
										value={this.state.retailerName}
										onChangeText={(value) => this.handleChange('retailerName', value)}
									/>
								</View>
								<View style={styles.coulmns1}>
									<TextField
										label="Store Manager"
										{...textFieldProps}
										value={this.state.managerName}
										onChangeText={(value) => this.handleChange('managerName', value)}
									/>
								</View>
								<View style={styles.coulmns1}>
									<TextField
										label="Store Manager Contact Number"
										{...textFieldProps}
										value={this.state.managerContact}
										onChangeText={(value) => this.handleChange('managerContact', value)}
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
										value={this.state.address1}
										onChangeText={(value) => this.handleChange('address1', value)}
									/>
								</View>
								<View style={styles.coulmns1}>
									<TextField
										label="Address Line 2 (Optional)"
										{...textFieldProps}
										value={this.state.address2}
										onChangeText={(value) => this.handleChange('address2', value)}
									/>
								</View>
								<View style={styles.coulmns1}>
									<TextField
										label="Postal Code"
										{...textFieldProps}
										value={this.state.postalCode}
										onChangeText={(value) => this.handleChange('postalCode', value)}
									/>
								</View>
								<View style={styles.coulmns1}>
									<TextField
										label="Computer Mall"
										{...textFieldProps}
										value={this.state.computerMall}
										onChangeText={(value) => this.handleChange('computerMall', value)}
									/>
								</View>
								<View style={styles.coulmns1}>
									<TextField
										label="Countr"
										{...textFieldProps}
										value={this.state.country}
										onChangeText={(value) => this.handleChange('country', value)}
									/>
								</View>
							</View>
							{
								!params.isEdit ?
								<View style={styles.formActions}>
									<Button onPress={() => this.props.navigation.goBack()} style={styles.lightBtn}>
										<Text style={styles.lightBtnTxt}>SAVE & EXIT</Text>
									</Button>
									<Button onPress={() => this.props.navigation.goBack()} style={styles.darkBtn}>
										<Text style={styles.darkBtnTxt}>CONTINUE</Text>
									</Button>
								</View> :
								<View style={styles.formActions}>
									<Button onPress={() => this.props.navigation.goBack()} style={styles.darkBtn}>
										<Text style={styles.darkBtnTxt}>SAVE</Text>
									</Button>
								</View>
							}
						</View>
					</ScrollView>
			</Container>
		);
	}
}

export default AddEditStore;
