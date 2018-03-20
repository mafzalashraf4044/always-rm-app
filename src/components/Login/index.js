import * as React from "react";

import {
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";

import {
	Button,
} from "native-base";

import { TextField } from "react-native-material-textfield";

import styles from "./styles";
import { getSizeWRTDeviceWidth } from "../../utils";

export interface Props {
	loginForm: any,
	login: Function,
}

export interface State {}

class Login extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			pwd: "",
			errMessage: "",
			isLogoVisible: true,
		};
	}

  onLogin = () => {
		this.props.login(this.state.email, this.state.pwd).then((res) => {
			if (res.status === 200) {
				this.props.setUser(res.data.user);
        this.props.navigation.navigate("Drawer");
      }
    }).catch((err) => {
      this.setErrMessage("You have keyed in a wrong email/password");
      // throw new Error(err);
    });
  }

  setErrMessage = (errMessage) => {
		this.setState({
      errMessage,
    });
  }

	handleFocus = () => {
		this.setState({isLogoVisible: false});
	}

	handleBlur = () => {
		this.setState({isLogoVisible: true});
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
			labelFontSize:getSizeWRTDeviceWidth(14) - 2,
			inputContainerStyle:{borderBottomWidth: 0.8, borderBottomColor: "#FFF", marginTop: getSizeWRTDeviceWidth(-15)},
		};

		return (
			<View style={styles.loginScreen}>
				<View style={styles.loginView}>
					<Image
						blurRadius={5}
						style={styles.backgroundImg}
						source={require("../../assets/Images/app-bg.jpeg")}
					/>
					<View style={styles.logoContainer}>
						{
							this.state.isLogoVisible &&
							<Image
								style={styles.logo}
								source={require("../../assets/Images/logo-always.png")}
							/>
						}
					</View>
					<View style={styles.formContainer}>
						<View>
							<TextField
								value={this.state.email}
								label="RPM Login ID"
								{...textFieldProps}
								onChangeText={(value) => this.handleInputChange('email', value)}
							/>
							<TextField
								value={this.state.pwd}
								type="password"
								label="Password"
								{...textFieldProps}
								onChangeText={(value) => this.handleInputChange('pwd', value)}
							/>
						</View>
						{
							this.state.errMessage ?
							<View style={styles.errMessageContainer}>
									<Text style={styles.errMessageTxt}>{this.state.errMessage}</Text>
							</View> : null
						}
						<View>
							<Button block onPress={this.onLogin} style={styles.loginBtn}>
								<Text style={styles.loginBtnTxt}>LOG IN</Text>
							</Button>
						</View>
						<View>
							<TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPwd")}> 
								<Text style={styles.forgotPwdTxt}>FORGOT PASSWORD</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default Login;
