// @flow
import * as React from "react";

import { AsyncStorage } from "react-native";

import MyStores from "../../components/MyStores";

import { connect } from "react-redux";
import { getStores, setIsLoading } from "../../actions";

import { MY_STORES } from "../../constants";

export interface Props {
	navigation: any,
}

export interface State {}

class MyStoresContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);

		this.state = {
			user: null,
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
	}

	componentWillMount() {
		this.props.setIsLoading(true);
    try {
			AsyncStorage.getItem("user").then((user) => {
				if (user !== null){
					this.setState({
						user: JSON.parse(user),
					}, () => {
						this.props.setIsLoading(false);
					});
        }
      });
    } catch (error) {
			this.props.setIsLoading(false);
      throw new Error(error);
    }
	}


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
		if (this.state.user && this.state.user.userGroup) {
			return (
				<MyStores
					formType={this.state.user.userGroup === "RCRs" ? MY_STORES.RCR : MY_STORES.MERCHANDISERS}
					stores={this.state.stores}
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
		getStores: () => dispatch(getStores()),
		setIsLoading: isLoading => dispatch(setIsLoading(isLoading)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyStoresContainer);
