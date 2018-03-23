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

  render() {
		return (
      <Login
        login={this.props.login}
        setUser={this.props.setUser}
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
    setUser: user => dispatch(setUser(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

