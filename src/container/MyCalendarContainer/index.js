// @flow
import * as React from "react";

import MyCalendar from "../../components/MyCalendar";

import { connect } from "react-redux";
// import { getStores, setIsLoading } from "../../actions";

export interface Props {
	navigation: any,
}

export interface State {}

class MyCalendarContainer extends React.Component<Props, State> {

	render() {
		return (
			<MyCalendar
				navigation={this.props.navigation}
			/>
		);
	}
}

const mapStateToProps = state => ({
	// isLoading: state.StoresReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyCalendarContainer);
