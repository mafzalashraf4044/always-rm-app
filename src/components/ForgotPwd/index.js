import * as React from "react";

import {
  Text,
	View,
	Image,
} from "react-native";

import {
	Button,
} from "native-base";

import Header from "../common/Header";

import { TextField } from "react-native-material-textfield";

import styles from "./styles";
import { getSizeWRTDeviceWidth } from "../../utils";

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
		const textFieldProps = {
			lineWidth:0,
			textColor:"#fff",
			baseColor:"rgba(183,183,183,1)",
			tintColor:"rgba(183,183,183,1)",
			fontSize:getSizeWRTDeviceWidth(14),
			labelFontSize:getSizeWRTDeviceWidth(14) - 2,
			inputContainerStyle:{borderBottomWidth: 0.8, borderBottomColor: "#FFF", marginTop: getSizeWRTDeviceWidth(-15)},
		};

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
                <TextField
                  value=""
                  label="E-mail Address"
                  {...textFieldProps}
                  onChangeText={undefined}
                />
              </View> :
						<View>
							<TextField
								value=""
								type="password"
								label="New Password"
								{...textFieldProps}
								onChangeText={undefined}
							/>
							<TextField
								value=""
								type="password"
								label="Confirm New Password"
								{...textFieldProps}
								onChangeText={undefined}
							/>
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
