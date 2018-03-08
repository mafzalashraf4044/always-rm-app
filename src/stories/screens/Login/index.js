import * as React from "react";
import {
	Image,
	Dimensions,
	TouchableOpacity,
	Text,
	View,
} from "react-native";
import {
	Container,
	Content,
	Button,
} from "native-base";

import styles from "./styles";

export interface Props {
	loginForm: any,
	onLogin: Function,
}

export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content>
					<View style={styles.loginView}>
						<Image
							blurRadius={5}
							style={styles.backgroundImg}
							source={require("../../../assets/Images/app-bg.jpg")}
						/>
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
				</Content>
			</Container>
		);
	}
}

export default Login;
