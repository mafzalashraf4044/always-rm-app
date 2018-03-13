// @flow
import * as React from "react";
import ForgotPwd from "../../components/ForgotPwd";
export interface Props {
	navigation: any,
}
export interface State {}
export default class ForgotPwdContainer extends React.Component<Props, State> {
	render() {
		return <ForgotPwd navigation={this.props.navigation} />;
	}
}
