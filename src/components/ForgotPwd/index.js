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

import Header from '../common/Header';

import { getSizeWRTDeviceWidth } from '../../utils';
import styles from "./styles";

export interface Props {
	loginForm: any,
	onLogin: Function,
}

export interface State {}
class ForgotPwd extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			isEnterEmailVisible: true,
		};
  }
  
  toggleEnterEmailVisible = () => {
    this.setState(prevState => ({
      isEnterEmailVisible: !prevState.isEnterEmailVisible,
    }));
  }

  cancelForm = () => {
    if (this.state.isEnterEmailVisible) {
      this.props.navigation.goBack();
    } else {
      this.toggleEnterEmailVisible();
    }
  }

  submitForm = () => {
    if (this.state.isEnterEmailVisible) {
      this.toggleEnterEmailVisible();
    } else {
      this.props.navigation.navigate("Auth");
    }
  }

	render() {
    const iconLeft =
      this.state.isEnterEmailVisible ?
      {url: require("../../assets/Icons/Light/Delete.png"), onPress: () => this.props.navigation.goBack()} : 
      {url: require("../../assets/Icons/Light/Back.png"), onPress: this.toggleEnterEmailVisible};

    return (
			<View style={styles.forgotPwdScreen}>
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
              this.state.isEnterEmailVisible ?
              <View>
                <Item floatingLabel light>
                  <Label style={{fontSize: getSizeWRTDeviceWidth(12)}}>E-mail Address</Label>
                  <Input
                    secureTextEntry={false}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                  />
                </Item>
              </View> :
						<View>
              <Item floatingLabel light>
                <Label style={{fontSize: getSizeWRTDeviceWidth(12)}}>New Password</Label>
                <Input
                  secureTextEntry
                />
              </Item>
              <Item floatingLabel light>
                <Label style={{fontSize: getSizeWRTDeviceWidth(12)}}>Confirm New Password</Label>
                <Input
                  secureTextEntry
                />
              </Item>
            </View>
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
			</View>
		);
	}
}

export default ForgotPwd;
