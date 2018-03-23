// @flow
import * as React from "react";
import { connect } from "react-redux";
import ForgotPwd from "../../components/ForgotPwd";

import { forgotPwd, resetPwd } from "../../actions";

export interface Props {
	navigation: any,
}

export interface State {}

class ForgotPwdContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			errMessage: "",
			isEnterEmailVisible: true,
		};
	}

  toggleEnterEmailVisible = () => {
    this.setState(prevState => ({
			errMessage: "",
			isEnterEmailVisible: !prevState.isEnterEmailVisible,
    }));
  }

  forgotPwd = (email) => {
		this.props.forgotPwd(email).then((res) => {
			if (res.status === 200) {
				this.toggleEnterEmailVisible();
      }
    }).catch((err) => {
      this.setErrMessage("You have keyed in a wrong email");
      // throw new Error(err);
    });
  }

  resetPwd = (email, pwd, confirmPwd) => {
		this.props.resetPwd(email, pwd, confirmPwd).then((res) => {
			if (res.status === 200) {
				this.props.navigation.navigate("Auth");
      }
    }).catch((err) => {
      this.setErrMessage("You have keyed in a wrong email/password");
      // throw new Error(err);
    });
	}
	
  setErrMessage = (errMessage) => {
		this.setState({
      errMessage,
    });
  }

	render() {
		return (
			<ForgotPwd
				forgotPwd={this.forgotPwd}
				resetPwd={this.resetPwd}
				errMessage={this.state.errMessage}
				navigation={this.props.navigation}
				isEnterEmailVisible={this.state.isEnterEmailVisible}
				toggleEnterEmailVisible={this.toggleEnterEmailVisible}
			/>
		);
	}
}

const mapStateToProps = state => ({
	// isLoading: state.homeReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		forgotPwd: email => dispatch(forgotPwd(email)),
		resetPwd: (email , password, passwordConfirmation) => dispatch(resetPwd(email , password, passwordConfirmation)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPwdContainer);

