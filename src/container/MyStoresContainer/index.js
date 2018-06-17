// @flow
import * as React from "react";

import MyStores from "../../components/MyStores";

import { connect } from "react-redux";
import { getStores } from "../../actions";

import { MY_STORES } from "../../constants";

export interface Props {
	navigation: any,
}

export interface State {}

class MyStoresContainer extends React.Component<Props, State> {

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
			<MyStores
				formType={MY_STORES.RCR}
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

export default connect(mapStateToProps, mapDispatchToProps)(MyStoresContainer);
