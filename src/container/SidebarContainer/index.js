// @flow
import * as React from "react";
import { connect } from "react-redux";
import Sidebar from "../../components/Sidebar";

// import { fetchList } from "./actions";

export interface Props {
	navigation: any,
}

export interface State {}

class SidebarContainer extends React.Component<Props, State> {
	render() {
		return <Sidebar navigation={this.props.navigation} user={this.props.user} />;
	}
}

const mapStateToProps = state => ({
	user: state.reducer.user,
});

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchList: url => dispatch(fetchList(url)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
