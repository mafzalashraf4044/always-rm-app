// @flow
import * as React from "react";
import { AsyncStorage } from 'react-native';
import { connect } from "react-redux";
import Login from "../../components/Login";

import { login, setIsLoading } from "../../actions";

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

    this.props.setIsLoading(true);
	}

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    try {
      AsyncStorage.getItem('user').then((user) => {
        if (user !== null){
          this.props.navigation.navigate("Drawer");
        }

        this.props.setIsLoading(false);
      });
    } catch (error) {
      // Error retrieving data
      this.props.setIsLoading(false);
    }
  }

  onLogin = (email, pwd) => {
		this.props.login(email, pwd).then((res) => {
			if (res.status === 200) {
        AsyncStorage.multiSet([
            ['user', JSON.stringify(res.data.user)],
            ['jwtToken', JSON.stringify(res.data.jwt)]
          ],
          () => {
            this.props.navigation.navigate("Drawer");
          }
        );
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
	// isLoading: state.reducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
    login: (email, pwd) => dispatch(login(email, pwd)),
    setIsLoading: isLoading => dispatch(setIsLoading(isLoading)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

