// @flow
import * as React from "react";

import SKUAnalysis from "../../components/SKUAnalysis";

import { connect } from "react-redux";
import { getStores } from "../../actions";

import { SKU_ANALYSIS } from "../../constants";

export interface Props {
	navigation: any,
}

export interface State {}

class SKUAnalysisContainer extends React.Component<Props, State> {

	state = {
		stores: [{
			storeId: 3445,
			storeName: "Harvey Norman",
			primaryManagerName: "Alwyn Lao",
			modifiedAt: "14/02/2018 01:24:33pm",
			addressLine1: "960 Yishun Central #B2-101/203 S(760960)",
			addressLine2: "Northpoint Shopping Centre",
			country: "Singapore",
		},
		{
			storeId: 3445,
			storeName: "Harvey Norman",
			primaryManagerName: "Alwyn Lao",
			modifiedAt: "14/02/2018 01:24:33pm",
			addressLine1: "960 Yishun Central #B2-101/203 S(760960)",
			addressLine2: "Northpoint Shopping Centre",
			country: "Singapore",
		},
		{
			storeId: 3445,
			storeName: "Harvey Norman",
			primaryManagerName: "Alwyn Lao",
			modifiedAt: "14/02/2018 01:24:33pm",
			addressLine1: "960 Yishun Central #B2-101/203 S(760960)",
			addressLine2: "Northpoint Shopping Centre",
			country: "Singapore",
		}],
	};

	// componentDidMount() {
	// 	this.props.getStores().then((res) => {
	// 		if (res.status === 200) {
	// 			alert(JSON.stringify(res));
	// 			this.setState({
	// 				stores: [{} ,...res.data],
	// 			});
	// 		}
	// 	}).catch((err) => {
	// 		alert('eer');
	// 		throw new Error();
	// 	});
	// }

	render() {
		return (
			<SKUAnalysis
				formType={SKU_ANALYSIS}
				stores={this.state.stores}
				navigation={this.props.navigation}
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SKUAnalysisContainer);
