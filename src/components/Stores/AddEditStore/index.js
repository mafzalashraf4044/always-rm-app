import * as React from "react";
import {
	Container,
	Item,
	Input,
	Form,
	Label
} from "native-base";
import { getSizeWRTPercentage } from '../../../utils';
import Header from '../../common/Header';

import { Picker, View, KeyboardAvoidingView, ScrollView, TouchableOpacity, Image, Text } from "react-native";

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
		};
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
		const labelStyle = {fontSize: getSizeWRTPercentage(12)};

		return (
			<Container style={styles.addEditStore}>
				{
					this.state.isStoreImgContainerVisible && 
					<View style={styles.storeImgContainer}>
						<Header
							title="Add Store"
							navigation={this.props.navigation}
							iconLeft={{
								url: require("../../../assets/Icons/Light/Back.png"),
								onPress: () => this.props.navigation.goBack(),
							}}
						/>
						<TouchableOpacity onPress={() => {}}>
							<View style={styles.addEditImg}>
								<Image
									style={styles.cameraIcon}
									source={require("../../../assets/Icons/Light/Camera.png")}
								/>
								<Text style={styles.addEditImgTxt}>Add store image</Text>
							</View>
						</TouchableOpacity>
					</View>
				}
					<ScrollView endFillColor="#fff">
						<View style={styles.formView}>
							<View style={styles.formSection}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>Add Store Details</Text>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel>
										<Label style={labelStyle}>Store Name</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											value={this.state.storeName}
											onChangeText={(value) => this.handleChange('storeName', value)}
										/>
									</Item>
								</View>
								<View style={styles.coulmns2}>
									<Item floatingLabel disabled style={styles.widthHalf}>
										<Label style={labelStyle}>Store ID</Label>
										<Input
											disabled
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											value={this.state.storeID}
											onChangeText={(value) => this.handleChange('storeID', value)}
										/>
									</Item>
									<View style={[styles.dropdownContainer, styles.widthHalf]}>
										<Item floatingLabel>
											<Label style={labelStyle}>Store Status</Label>
											<Input
												editable={false}
											/>
										</Item>
										<Image
											style={styles.dropdownIcon}
											source={require("../../../assets/Icons/Dark/SortDown.png")}
										/>
									</View>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel>
										<Label style={labelStyle}>Retailer Name</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											value={this.state.retailerName}
											onChangeText={(value) => this.handleChange('retailerName', value)}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel>
										<Label style={labelStyle}>Store Manager</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											value={this.state.managerName}
											onChangeText={(value) => this.handleChange('managerName', value)}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel>
										<Label style={labelStyle}>Store Manager Contact Number</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											value={this.state.managerContact}
											onChangeText={(value) => this.handleChange('managerContact', value)}
										/>
									</Item>
								</View>
							</View>
							<View style={styles.formSection}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>Add Store Address</Text>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel>
										<Label style={labelStyle}>Address Line 1</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											value={this.state.address1}
											onChangeText={(value) => this.handleChange('address1', value)}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel>
										<Label style={labelStyle}>Address Line 2 (Optional)</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											value={this.state.address2}
											onChangeText={(value) => this.handleChange('address2', value)}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel>
										<Label style={labelStyle}>Postal Code</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											value={this.state.postalCode}
											onChangeText={(value) => this.handleChange('postalCode', value)}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel>
										<Label style={labelStyle}>Computer Mall</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											value={this.state.computerMall}
											onChangeText={(value) => this.handleChange('computerMall', value)}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel>
										<Label style={labelStyle}>Country</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
											value={this.state.country}
											onChangeText={(value) => this.handleChange('country', value)}
										/>
									</Item>
								</View>
							</View>
						</View>
					</ScrollView>
			</Container>
		);
	}
}

export default AddEditStore;
