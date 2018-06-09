// @flow
import * as React from "react";

import { AsyncStorage } from "react-native";

import Home from "../../components/Home";

import { connect } from "react-redux";
import { setUser, setJWTToken } from "../../actions";

export interface Props {
	navigation: any,
}

class HomeContainer extends React.Component<Props> {

	componentWillMount() {
    try {
			AsyncStorage.multiGet(["user", "jwtToken"], (err, results) => {
				if (err) {
					throw new Error(err);
				}

				results.map((result, i) => {
					const KEY_INDEX = 0;
					const VALUE_INDEX = 1;

					if (result[KEY_INDEX] === "user") {
						this.props.setUser(JSON.parse(result[VALUE_INDEX]));
					} else if (result[KEY_INDEX] === "jwtToken") {
						this.props.setJWTToken(JSON.parse(result[VALUE_INDEX]));
					}
				});
			});
    } catch (error) {
      throw new Error(error);
    }
	}

	render() {
		return <Home navigation={this.props.navigation} user={this.props.user} />;
	}
}

const mapStateToProps = state => ({
	user: state.reducer.user,
});

const mapDispatchToProps = (dispatch) => {
	return {
		setUser: user => dispatch(setUser(user)),
		setJWTToken: jwtToken => dispatch(setJWTToken(jwtToken)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
