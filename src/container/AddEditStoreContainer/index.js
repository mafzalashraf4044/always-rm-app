// @flow
import * as React from "react";
import AddEditStore from "../../components/AddEditStore";
export interface Props {
	navigation: any,
}
export interface State {}
export default class AddEditStoreContainer extends React.Component<Props, State> {
	render() {
		return <AddEditStore navigation={this.props.navigation} />;
	}
}
