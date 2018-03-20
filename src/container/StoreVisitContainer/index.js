// @flow
import * as React from "react";
import { connect } from "react-redux";
import StoreVisit from "../../components/StoreVisit";

// import { fetchList } from "./actions";

export interface Props {
	navigation: any,
}

export interface State {}

class StoreVisitContainer extends React.Component<Props, State> {
	render() {
		return <StoreVisit navigation={this.props.navigation} />;
	}
}

const mapStateToProps = state => ({
	// isLoading: state.StoreVisitReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchList: url => dispatch(fetchList(url)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreVisitContainer);
