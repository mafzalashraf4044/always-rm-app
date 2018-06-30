// @flow
import * as React from "react";

import Notifications from "../../components/Notifications";

import { connect } from "react-redux";
// import { getStores, setIsLoading } from "../../actions";

export interface Props {
	navigation: any,
}

export interface State {}

class NotificationsContainer extends React.Component<Props, State> {

	render() {
		return (
			<Notifications
				navigation={this.props.navigation}
			/>
		);
	}
}

const mapStateToProps = state => ({
	// isLoading: state.StoresReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
