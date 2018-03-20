// @flow
import * as React from "react";
import { connect } from "react-redux";
import ForgotPwd from "../../components/ForgotPwd";

// import { fetchList } from "./actions";

export interface Props {
	navigation: any,
}

export interface State {}

class ForgotPwdContainer extends React.Component<Props, State> {
	render() {
		return <ForgotPwd navigation={this.props.navigation} />;
	}
}

const mapStateToProps = state => ({
	// isLoading: state.homeReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchList: url => dispatch(fetchList(url)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPwdContainer);

