// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import SKUVisit from "../../components/SKUVisit";

import { connect } from "react-redux";
import { setIsLoading } from "../../actions";

import { SKU_ANALYSIS } from "../../constants";

export interface Props {
	navigation: any,
}

export interface State {}

class SKUVisitContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);

		this.asyncStorageKey = "SKUANALYSIS";

		this.state = {
			formData: {},
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
			<SKUVisit
				formData={this.state.formData}
				navigation={this.props.navigation}
				saveCapturedImg={this.saveCapturedImg}
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

export default connect(mapStateToProps, mapDispatchToProps)(SKUVisitContainer);
