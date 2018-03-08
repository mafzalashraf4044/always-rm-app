import * as React from "react";
import { Image, Platform, Dimensions, TouchableOpacity, Text, View, } from "react-native";
import { Container, Content, Header, Body, Title, Button, Icon, Footer } from "native-base";
import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		const ScreenHeight = Dimensions.get("window").height;
		return (
			<Container>
				<Content>
					<View style={styles.loginView}>
						<Image
							blurRadius={5}
							style={styles.backgroundImg}
							source={require('../../../assets/Images/app-bg.jpg')}
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
