import * as React from "react";
import {
	Image,
	TouchableOpacity,
	Text,
	View,
} from "react-native";

import {
	Item,
	Input,
	Label,
	Button,
} from "native-base";

import { getSizeWRTDeviceWidth } from '../../utils';
import styles from "./styles";

export interface Props {
	loginForm: any,
	onLogin: Function,
}

export interface State {}
class Login extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			isLogoVisible: true,
		};
	}

	handleFocus = () => {
		this.setState({isLogoVisible: false});
	}

	handleBlur = () => {
		this.setState({isLogoVisible: true});
	}


	render() {
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
							<Item floatingLabel light>
								<Label style={{fontSize: getSizeWRTDeviceWidth(12)}}>RPM Login ID</Label>
								<Input
									secureTextEntry={false}
									onBlur={this.handleBlur}
									onFocus={this.handleFocus}
								/>
							</Item>
							<Item floatingLabel light>
								<Label style={{fontSize: getSizeWRTDeviceWidth(12)}}>Password</Label>
								<Input
									secureTextEntry
									onBlur={this.handleBlur}
									onFocus={this.handleFocus}
								/>
							</Item>
						</View>
						<View>
							<Button block onPress={() => this.props.onLogin()} style={styles.loginBtn}>
								<Text style={styles.loginBtnTxt}>LOG IN</Text>
							</Button>
						</View>
						<View>
							<TouchableOpacity block onPress={() => this.props.onLogin()}> 
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
