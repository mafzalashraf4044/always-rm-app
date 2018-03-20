// @flow
import * as React from "react";
import { connect } from "react-redux";
import AddEditStore from "../../components/AddEditStore";

// import { fetchList } from "./actions";

export interface Props {
	navigation: any,
}

export interface State {}

export default class AddEditStoreContainer extends React.Component<Props, State> {
	render() {
		return <AddEditStore navigation={this.props.navigation} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(AddEditStoreContainer);

