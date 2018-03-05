import * as React from "react";
import { Image, Platform, Dimensions, TouchableOpacity } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
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
							style={styles.backgroundImg}
							source={{ uri: 'https://i.pinimg.com/originals/55/9d/d4/559dd406bfc916d6fec1c97aae1de69f.jpg' }}
						/>
						<View style={styles.formContainer}>
							{this.props.loginForm}
							<View padder>
								<Button block onPress={() => this.props.onLogin()}>
									<Text>LOG IN</Text>
								</Button>
							</View>
							<View padder>
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
