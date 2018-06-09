// @flow
import * as React from "react";

import _ from "lodash";
import { AsyncStorage } from "react-native";

import Login from "../../components/Login";

import { connect } from "react-redux";
import { login, setIsLoading, saveCountries, getCountries } from "../../actions";

export interface Props {
	navigation: any,
}

class LoginContainer extends React.Component<Props> {

	constructor(props) {
		super(props);

    this.state = {
			errMessage: "",
    };

    this.props.setIsLoading(true);
	}

  componentDidMount() {
    this.checkIfLoggedIn();
    // this.props.getCountries().then((res) =>  {
    //   if (res.status === 200) {
    //     this.props.saveCountries(res.data.map((country) => ({value: country._id, label: country.name})));
    //   }
    // });
  }

  checkIfLoggedIn = () => {
    try {
      AsyncStorage.getItem("user").then((user) => {
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
    AsyncStorage.multiSet([
      ["user", JSON.stringify({name: "John Doe", email: "johndoe.always@gmail.com", username: "jd4044"})],
    ],
    () => {
      this.props.navigation.navigate("Drawer");
    }
  );

    // this.props.login(email, pwd).then((res) => {
		// 	if (res.status === 200) {
    //     AsyncStorage.multiSet([
    //         ["user", JSON.stringify(res.data.user)],
    //         ["jwtToken", JSON.stringify(res.data.jwt)]
    //       ],
    //       () => {
    //         this.props.navigation.navigate("Drawer");
    //       }
    //     );
    //   }
    // }).catch((err) => {
    //   this.setErrMessage("You have keyed in a wrong email/password");
    //   // throw new Error(err);
    // });
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
    saveCountries: countries => dispatch(saveCountries(countries)),
    getCountries: () => dispatch(getCountries()),
    setIsLoading: isLoading => dispatch(setIsLoading(isLoading)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

