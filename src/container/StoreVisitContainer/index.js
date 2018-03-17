// @flow
import * as React from "react";
import StoreVisit from "../../components/StoreVisit";
export interface Props {
	navigation: any,
}
export interface State {}
export default class StoreVisitContainer extends React.Component<Props, State> {
	render() {
		return <StoreVisit navigation={this.props.navigation} />;
	}
}
