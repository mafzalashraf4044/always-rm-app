// @flow
import * as React from "react";
import SearchStores from "../../components/SearchStores";
export interface Props {
	navigation: any,
}
export interface State {}
export default class SearchStoresContainer extends React.Component<Props, State> {
	render() {
		return <SearchStores navigation={this.props.navigation} />;
	}
}
