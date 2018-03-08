// @flow
import * as React from "react";
import Stores from "../../stories/screens/Stores";
export interface Props {
	navigation: any,
}
export interface State {}
export default class StoresContainer extends React.Component<Props, State> {
	render() {
		return <Stores navigation={this.props.navigation} />;
	}
}
