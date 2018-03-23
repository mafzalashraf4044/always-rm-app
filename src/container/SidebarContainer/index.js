// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import Sidebar from "../../components/Sidebar";

// import { fetchList } from "./actions";

export interface Props {
	navigation: any,
}

export interface State {}

class SidebarContainer extends React.Component<Props, State> {

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

	removeUserIfLogingOut = async (route) => {
		if (route === "Login") {
			await AsyncStorage.removeItem('user');
		}
	}

	render() {
		return (
			<Sidebar
				user={this.state.user}
				navigation={this.props.navigation}
				removeUserIfLogingOut={this.removeUserIfLogingOut}
			/>
		);
	}
}

const mapStateToProps = state => ({
	// user: state.reducer.user,
});

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchList: url => dispatch(fetchList(url)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
