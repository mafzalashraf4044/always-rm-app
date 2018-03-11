import * as React from "react";
import {
	Image,
	TouchableOpacity,
	Text,
	View,
	PixelRatio,
	Dimensions
} from "react-native";
import {
	Button,
} from "native-base";

import styles from "./styles";

export interface Props {
	loginForm: any,
	onLogin: Function,
}

const deviceWidth = Dimensions.get("window").width;

export interface State {}
class Login extends React.Component<Props, State> {
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
						<Text style={styles.logo}>Always RM</Text>
					</View>
					<View style={styles.formContainer}>
						{this.props.loginForm}
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
