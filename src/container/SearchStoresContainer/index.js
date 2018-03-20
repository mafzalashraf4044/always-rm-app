// @flow
import * as React from "react";
import { connect } from "react-redux";
import SearchStores from "../../components/SearchStores";

// import { fetchList } from "./actions";

export interface Props {
	navigation: any,
}

export interface State {}

class SearchStoresContainer extends React.Component<Props, State> {
	render() {
		return <SearchStores navigation={this.props.navigation} />;
	}
}

const mapStateToProps = state => ({
	// isLoading: state.SearchStoresReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchList: url => dispatch(fetchList(url)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchStoresContainer);
