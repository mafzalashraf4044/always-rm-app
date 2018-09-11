/**
 * @author Afzal Ashraf <afzalashraf.dev@gmail.com>
 */

// @flow
import * as React from "react";

//	third party components
import {
  Text,
	View,
	Image,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import { Button } from "native-base";
import { TextField } from "react-native-material-textfield";

//	custom components
import Header from "../common/Header";

//	styles
import styles from "./styles";

//	utils
import { getSizeWRTDeviceWidth } from "../../utils";

export interface Props {
	forgotPwd: func,
	resetPwd: func,
	errMessage: string,
	navigation: obj,
	isEnterEmailVisible: bool,
	toggleEnterEmailVisible: func,
}

class ForgotPwd extends React.Component<Props> {

	constructor(props) {
		super(props);

		this.state = {
      email: "",
      pwd: "",
      confirmPwd: "",
		};
  }

  cancelForm = () => {
    if (this.props.isEnterEmailVisible) {
      this.props.navigation.goBack();
    } else {
      this.props.toggleEnterEmailVisible();
    }
  }

  submitForm = () => {
    if (this.props.isEnterEmailVisible) {
      this.props.forgotPwd(this.state.email);
    } else {
      this.props.resetPwd(this.state.email, this.state.pwd, this.state.confirmPwd);
    }
  }

	handleInputChange = (key, value) => {
		this.setState({
			[key]: value,
		});
	}

	render() {
		const textFieldProps = {
			lineWidth:0,
			textColor:"#fff",
			baseColor:"rgba(183,183,183,1)",
			tintColor:"rgba(183,183,183,1)",
			fontSize:getSizeWRTDeviceWidth(14),
			labelFontSize:getSizeWRTDeviceWidth(12),
			inputContainerStyle:{borderBottomWidth: 0.8, borderBottomColor: "#FFF", marginTop: getSizeWRTDeviceWidth(-15)},
		};

    const iconLeft =
      this.props.isEnterEmailVisible ?
      {url: require("../../assets/Icons/Light/Delete.png"), onPress: () => this.props.navigation.goBack()} :
      {url: require("../../assets/Icons/Light/Back.png"), onPress: this.props.toggleEnterEmailVisible};

    return (
			<KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="position" enabled keyboardVerticalOffset={-80}>
				<ScrollView
					endFillColor="#fff"
					style={styles.forgotPwdScreen}
				>
					<View style={styles.forgotView}>
						<Image
							blurRadius={5}
							style={styles.backgroundImg}
							source={require("../../assets/Images/app-bg.jpeg")}
						/>
						<Header
							title="Forgot Password"
							navigation={this.props.navigation}
							iconLeft={iconLeft}
						/>

						<View style={styles.formContainer}>
							{
								this.props.isEnterEmailVisible ?
								<View>
									<TextField
										value={this.state.email}
										label="E-mail Address"
										{...textFieldProps}
										onChangeText={(value) => this.handleInputChange("email", value)}
									/>
								</View> :
							<View>
								<TextField
									value={this.state.pwd}
									type="password"
									label="New Password"
									secureTextEntry
									{...textFieldProps}
									onChangeText={(value) => this.handleInputChange("pwd", value)}
								/>
								<TextField
									value={this.state.confirmPwd}
									type="password"
									label="Confirm New Password"
									secureTextEntry
									{...textFieldProps}
									onChangeText={(value) => this.handleInputChange("confirmPwd", value)}
								/>
							</View>
							}
							{
								this.props.errMessage ?
								<View style={styles.errMessageContainer}>
										<Text style={styles.errMessageTxt}>{this.props.errMessage}</Text>
								</View> : null
							}
							<View style={styles.formActions}>
								<Button onPress={this.cancelForm} style={styles.lightBtn}>
									<Text style={styles.lightBtnTxt}>CANCEL</Text>
								</Button>
								<Button onPress={this.submitForm} style={styles.darkBtn}>
									<Text style={styles.darkBtnTxt}>SUBMIT</Text>
								</Button>
							</View>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}

export default ForgotPwd;
