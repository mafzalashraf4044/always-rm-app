// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import Home from "../../components/Home";

// import { fetchList } from "./actions";

export interface Props {
	navigation: any,
}

export interface State {}

class HomeContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);

		this.state = {
			user: null,
		};
	}

	componentWillMount() {
    try {
			AsyncStorage.getItem('user').then((user) => {
				if (user !== null){
					this.setState({
						user: JSON.parse(user),
					});
        }
      });
    } catch (error) {
      throw new Error(error);
    }
	}

	render() {
		return <Home navigation={this.props.navigation} user={this.state.user} />;
	}
}

const mapStateToProps = state => ({
	// isLoading: state.homeReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchList: url => dispatch(fetchList(url)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
