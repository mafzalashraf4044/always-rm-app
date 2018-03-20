// @flow
import * as React from "react";
import { connect } from "react-redux";
import Login from "../../components/Login";

// import { fetchList } from "./actions";

export interface Props {
	navigation: any,
}

export interface State {}

export default class LoginContainer extends React.Component<Props, State> {
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

const mapStateToProps = state => ({
	// isLoading: state.homeReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchList: url => dispatch(fetchList(url)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

