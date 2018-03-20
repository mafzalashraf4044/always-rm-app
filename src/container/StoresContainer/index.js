// @flow
import * as React from "react";
import { connect } from "react-redux";
import Stores from "../../components/Stores";

// import { fetchList } from "./actions";

export interface Props {
	navigation: any,
}

export interface State {}

class StoresContainer extends React.Component<Props, State> {
	render() {
		return <Stores navigation={this.props.navigation} />;
	}
}

const mapStateToProps = state => ({
	// isLoading: state.StoresReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchList: url => dispatch(fetchList(url)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresContainer);
