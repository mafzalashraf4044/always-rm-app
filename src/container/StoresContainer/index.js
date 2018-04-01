// @flow
import * as React from "react";
import { connect } from "react-redux";
import Stores from "../../components/Stores";

import { getStores } from "../../actions";

export interface Props {
	navigation: any,
}

export interface State {}

class StoresContainer extends React.Component<Props, State> {

	state = {stores: []};

	componentDidMount() {
		this.props.getStores().then((res) => {
			if (res.status === 200) {
				this.setState({
					stores: res.data,
				});
			}
		});
	}

	render() {
		return (
			<Stores
				stores={this.state.stores}	
				navigation={this.props.navigation}
			/>
		);
	}
}

const mapStateToProps = state => ({
	// isLoading: state.StoresReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		getStores: () => dispatch(getStores()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresContainer);
