// @flow
import * as React from "react";

import moment from "moment";
import { AsyncStorage } from "react-native";

import MyStores from "../../components/MyStores";

import { connect } from "react-redux";
import { getStores, setIsLoading } from "../../actions";

import { MY_STORES } from "../../constants";

export interface Props {
	navigation: any,
}

export interface State {}

const INITIAL_PAGE_INDEX = 1;

class MyStoresContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);

		this.state = {
			user: null,
			assignedRoutePlanners: [],
			rcrTabs: [
				{
					heading: "Outstanding",
					routePlanners: [],
				},
				{
					heading: "Today",
					routePlanners: [],
				},
				{
					heading: "Upcoming",
					routePlanners: [],
				},
				{
					heading: "Completed",
					routePlanners: [],
				},
			],
		};
	}

	componentWillMount() {
    try {
			AsyncStorage.getItem("user").then((user) => {
				if (user !== null){
					this.setState({
						user: JSON.parse(user),
					}, () => {
						this.getRoutePlanners({i: INITIAL_PAGE_INDEX});
					});
        }
      });
    } catch (error) {
			this.props.setIsLoading(false);
      throw new Error(error);
    }
	}

	getRoutePlanners = (tab, i = null, filterDays) => {
		const index = tab ? tab.i : i;

		if (this.state.rcrTabs[index].routePlanners.length === 0 || filterDays) {
			this.props.setIsLoading(true);

			let filter = "";
			const dateNow = moment().format("YYYY-MM-DD");

			if (this.state.rcrTabs[index].heading === "Outstanding") {
				filter = `?visitDate_lt=${dateNow}&completed=false`;
			} else if (this.state.rcrTabs[index].heading === "Today") {
				filter = `?visitDate=${dateNow}&completed=false`;
			} else if (this.state.rcrTabs[index].heading === "Upcoming") {
				filter = `?visitDate_gt=${dateNow}&completed=false`;
			} else if (this.state.rcrTabs[index].heading === "Completed") {

				if (filterDays) {
					const filterDate = moment().subtract(filterDays, "days").format("YYYY-MM-DD");
					filter = `?completed=true&visitDate_lt=${dateNow}&visitDate_gt=${filterDate}`;
				} else {
					filter = "?completed=true";
				}
			}

			this.props.getStores(filter).then((res) => {
				if (res.status === 200) {
					const rcrTabs = this.state.rcrTabs;
					rcrTabs[index].routePlanners = [...res.data];

					this.setState({
						rcrTabs,
					}, () => {
						this.props.setIsLoading(false);
					});
				}
			});
		}
	}

	render() {
		if (this.state.user && this.state.user.role) {
			return (
				<MyStores
					rcrTabs={this.state.rcrTabs}
					getRoutePlanners={this.getRoutePlanners}
					formType={this.state.user.role.type === "rcr" ? MY_STORES.RCR : MY_STORES.MERCHANDISERS}
					assignedRoutePlanners={this.state.assignedRoutePlanners}
					navigation={this.props.navigation}
				/>
			);
		}

		return null;
	}
}

const mapStateToProps = state => ({
	// isLoading: state.StoresReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		getStores: (filter) => dispatch(getStores(filter)),
		setIsLoading: isLoading => dispatch(setIsLoading(isLoading)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyStoresContainer);
