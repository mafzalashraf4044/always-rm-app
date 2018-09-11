// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";

import _ from "lodash";

import StoreVisit from "../../components/StoreVisit";

import { connect } from "react-redux";
import { setIsLoading, saveRcrFormData, uploadImage, getRcrFormData } from "../../actions";

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
		this.formTemplate = null;
		const { params } = this.props.navigation.state; //params.formType

		if (params.formType === MY_STORES.RCR) {
			formData = _formData.myStoresRCR;
			this.formTemplate = myStoresRCRTemplate;
		} else if (params.formType === MY_STORES.MERCHANDISERS) {
			formData = _formData.myStoresMerchandisers;
			this.formTemplate = myStoresMerchandisersTemplate;
		}

		this.state = {
			formData: _.cloneDeep(formData),
			planner: params.assignedRoutePlanner,
			store: params.assignedRoutePlanner.store,
		};

		this.props.setIsLoading(true);
	}

	componentDidMount() {
		if (this.state.planner.completed) {
			this.props.getRcrFormData(this.state.planner.id).then((res) => {
				if (res.status === 200) {
					this.setState({
						formData: res.data,
					}, () => {
						this.props.setIsLoading(false);
					});
				}
			}).catch((err) => {
				throw new Error(err);
			});
		} else {
			try {
				AsyncStorage.getItem(this.state.planner.id).then((formData) => {
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

	saveFormToAsyncStorage = (isSubmit = false) => {
		if (isSubmit) {
			const formData = _.omit(this.state.formData, ["newRspItems"]);
			this.props.saveRcrFormData({...formData, planner: {_id: this.state.planner._id}}).then((res) => {
				if (res.status === 200) {
					AsyncStorage.setItem(this.state.planner.id, JSON.stringify(this.state.formData));
				}
			}).catch((err) => {
				throw new Error(err);
			});
		} else {
			AsyncStorage.setItem(this.state.planner.id, JSON.stringify(this.state.formData));
		}
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

	handleFormDataChange = (key, value, formLayout, aggregate = null) => {
		const formData = this.state.formData;

		if (!formLayout) {
			formData[key] = value;
    } else if (formLayout.isDataGrid) {
			formData[formLayout.gridItemKey][formLayout.gridItemIndex][key] = value;
    }

		this.setState({
			formData,
		}, () => {
			if (aggregate) {
				this.handleFormDataChange(aggregate.key, aggregate.aggregateOf.reduce((_sum, _key) => _sum + (formData[_key] === "" ? 0 : parseInt(formData[_key], 10)), 0).toString(), formLayout);
			}

		});
	}

  signaturePadChange = (base64DataUrl, formField, formLayout) => {
		this.handleFormDataChange(formField.key, base64DataUrl, formLayout);
	};

	render() {
		return (
			<StoreVisit
				store={this.state.store}
				formData={this.state.formData}
				formTemplate={this.formTemplate}
				navigation={this.props.navigation}
				disableEditing={this.state.planner.completed}
				saveCapturedImg={this.saveCapturedImg}
				appendNewRspToList={this.appendNewRspToList}
				signaturePadChange={this.signaturePadChange}
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
		uploadImage: image => dispatch(uploadImage(image)),
		setIsLoading: isLoading => dispatch(setIsLoading(isLoading)),
		saveRcrFormData: rcrFormData => dispatch(saveRcrFormData(rcrFormData)),
		getRcrFormData: plannerId => dispatch(getRcrFormData(plannerId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreVisitContainer);
