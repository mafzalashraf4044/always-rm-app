// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import StoreVisit from "../../components/StoreVisit";

import { connect } from "react-redux";
import { setIsLoading } from "../../actions";

import myStoresRCRTemplate from "./forms/mystoresrcr";
import myStoresMerchandisersTemplate from "./forms/mystoresmerchandisers";

import * as _formData from "./formData";
import { MY_STORES } from "../../constants";

export interface Props {
	navigation: any,
}

export interface State {}

class StoreVisitContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);

		let formData = null;
		this.asyncStorageKey = null;
		this.formTemplate = null;
		const { params } = this.props.navigation.state; //params.formType

		if (params.formType === MY_STORES.RCR) {
			formData = _formData.myStoresRCR;
			this.asyncStorageKey = "RCR";
			this.formTemplate = myStoresRCRTemplate;
		} else if (params.formType === MY_STORES.MERCHANDISERS) {
			formData = _formData.myStoresMerchandisers;
			this.asyncStorageKey = "MERCHANDISERS";
			this.formTemplate = myStoresMerchandisersTemplate;
		}

		this.state = {
			formData,
			store: params.store,
		};

		this.props.setIsLoading(true);
	}

	componentDidMount() {
		try {
			// AsyncStorage.clear(() => {});
      AsyncStorage.getItem(this.asyncStorageKey).then((formData) => {
				if (formData !== null){
						this.setState({
							formData: JSON.parse(formData),
						}, () => {
							this.props.setIsLoading(false);
						});
        } else {
					this.props.setIsLoading(false);
				}
			});

    } catch (err) {
			throw new Error(err);
    }
	}

	saveCapturedImg = (key, image, formLayout) => {
		const formData = this.state.formData;

		if (!formLayout) {
			formData[key] = [...formData[key], image];
    } else if (formLayout.isDataGrid) {
			formData[formLayout.gridItemKey][formLayout.gridItemIndex][key] = [...formData[formLayout.gridItemKey][formLayout.gridItemIndex][key], image];
    }

		this.setState({
			formData,
		});
	}

	saveFormToAsyncStorage = () => {
		AsyncStorage.setItem(this.asyncStorageKey, JSON.stringify(this.state.formData));
	}

	addOneDataGridItem = (key, gridItem) => {
		const formData = this.state.formData;
		formData[key] = [...formData[key], _.cloneDeep(gridItem)];

		this.setState({
			formData,
		});
	}

	appendNewRspToList = () => {
		const formData = this.state.formData;
		formData.rspList = [...formData.rspList, ...formData.newRspItems];
		formData.newRspItems = [];

		this.setState({
			formData,
		});
	}

	handleFormDataChange = (key, value, formLayout) => {
		const formData = this.state.formData;

		if (!formLayout) {
			formData[key] = value;
    } else if (formLayout.isDataGrid) {
			formData[formLayout.gridItemKey][formLayout.gridItemIndex][key] = value;
    }

		this.setState({
			formData,
		});
	}

	render() {
		return (
			<StoreVisit
				store={this.state.store}
				formData={this.state.formData}
				formTemplate={this.formTemplate}
				navigation={this.props.navigation}
				saveCapturedImg={this.saveCapturedImg}
				appendNewRspToList={this.appendNewRspToList}
				addOneDataGridItem={this.addOneDataGridItem}
				handleFormDataChange={this.handleFormDataChange}
				saveFormToAsyncStorage={this.saveFormToAsyncStorage}
			/>
		);
	}
}

const mapStateToProps = state => ({
	// isLoading: state.StoreVisitReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
    setIsLoading: isLoading => dispatch(setIsLoading(isLoading)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreVisitContainer);
