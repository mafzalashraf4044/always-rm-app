// @flow
import * as React from "react";
import { connect } from "react-redux";
import SearchStores from "../../components/SearchStores";

import { getStores, setIsLoading } from "../../actions";

export interface Props {
	navigation: any,
}

export interface State {}

class SearchStoresContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);

		this.state = {
			stores: [],
		};
	}

	searchStores = (searchTerm) => {
		this.props.setIsLoading(true);

		this.props.getStores(searchTerm).then((res) => {
			if (res.status === 200) {
				this.setState({
					stores: res.data,
				});
			}
			this.props.setIsLoading(false);
		}).catch((err) => {
			this.props.setIsLoading(false);
			throw new Error(err);
		});
	}

	render() {
		return (
			<SearchStores
				stores={this.state.stores}
				searchStores={this.searchStores}
				navigation={this.props.navigation}
			/>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		getStores: searchTerm => dispatch(getStores(searchTerm)),
		setIsLoading: isLoading => dispatch(setIsLoading(isLoading)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchStoresContainer);
