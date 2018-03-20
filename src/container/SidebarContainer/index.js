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
		return <Sidebar navigation={this.props.navigation} />;
	}
}

const mapStateToProps = state => ({
	// isLoading: state.SidebarReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchList: url => dispatch(fetchList(url)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
