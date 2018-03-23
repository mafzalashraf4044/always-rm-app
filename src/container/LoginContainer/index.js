// @flow
import * as React from "react";
import { AsyncStorage } from 'react-native';
import { connect } from "react-redux";
import Login from "../../components/Login";

import { login, setUser } from "../../actions";

export interface Props {
	navigation: any,
}

export interface State {}

class LoginContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			errMessage: "",
		};
	}

  componentWillMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    try {
      AsyncStorage.getItem('user').then((user) => {
        if (user !== null){
          this.props.navigation.navigate("Drawer");
        }
      });
    } catch (error) {
      // Error retrieving data
    }
  }

  onLogin = (email, pwd) => {
		this.props.login(email, pwd).then((res) => {
			if (res.status === 200) {
				AsyncStorage.setItem('user', JSON.stringify(res.data.user));
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

  render() {
		return (
      <Login
        onLogin={this.onLogin}
        errMessage={this.state.errMessage}
        navigation={this.props.navigation}
      />
    );
	}
}

const mapStateToProps = state => ({
	isLoading: state.reducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
    login: (email, pwd) => dispatch(login(email, pwd)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

