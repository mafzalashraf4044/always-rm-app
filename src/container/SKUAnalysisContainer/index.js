// @flow
import * as React from "react";

import SKUAnalysis from "../../components/SKUAnalysis";

import { connect } from "react-redux";
import { getStores, setIsLoading } from "../../actions";

import { SKU_ANALYSIS } from "../../constants";

export interface Props {
	navigation: any,
}

export interface State {}

class SKUAnalysisContainer extends React.Component<Props, State> {

	state = {
		assignedRoutePlanners: [],
	};

	componentWillMount() {
		this.props.setIsLoading(true);
		this.props.getStores().then((res) => {
			if (res.status === 200) {
				this.setState({
					assignedRoutePlanners: [...res.data],
				}, () => {
					this.props.setIsLoading(false);
				});
			}
		}).catch((err) =>{
			this.props.setIsLoading(false);
      throw new Error(err);
    });
	}

	render() {
		return (
			<SKUAnalysis
				formType={SKU_ANALYSIS}
				navigation={this.props.navigation}
				assignedRoutePlanners={this.state.assignedRoutePlanners}
			/>
		);
	}
}

const mapStateToProps = state => ({
	// isLoading: state.StoresReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		getStores: () => dispatch(getStores()),
		setIsLoading: isLoading => dispatch(setIsLoading(isLoading)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SKUAnalysisContainer);
