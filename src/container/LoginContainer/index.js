// @flow
import * as React from "react";
import Login from "../../components/Login";

export interface Props {
  navigation: any;
}
export interface State {}
class LoginContainer extends React.Component<Props, State> {

  login() {
    this.props.navigation.navigate("Drawer");
  }

  render() {
    return (
      <Login
        navigation={this.props.navigation}
        onLogin={() => this.login()}
      />
    );
  }
}

export default LoginContainer;
