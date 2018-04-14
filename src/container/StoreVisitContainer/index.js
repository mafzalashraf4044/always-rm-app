// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import StoreVisit from "../../components/StoreVisit";

import { setIsLoading } from "../../actions";

import { visitFormTemplate } from "./data";

const FIRST_INDEX = 0;

export interface Props {
	navigation: any,
}

export interface State {}

class StoreVisitContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			formTemplate: null,
			formData: {
				storeStatus: "",
				visitNumber: "",
				noOfRspsOnDutyDuringVisit: "",
				noOfRspsWhoAttendedFaceToFaceTraining: "",
				noOfIrepCoursesCompletedDuringVisit: "",
				faceToFaceTraining: [
					{
						trainingCourse: "",
						trainingDone: false,
					}
				],
				trainingActivityImages: [],
				canStoreDeployPosm: false,
				posm: false,
				twoInOnePcs: "",
				laptops: "",
				allIn1Pcs: "",
				merchandisingImages: [],
				iposRxtInstallation: false,
				currentInStore: "",
				newInstallation: "",
				totIposRxtInstallation: "",
				iposRxtInstallationImages: [],
				rxtSubmission: "",
				totalPcsInStore: "",
				pcsPowerdByIntelTurnedOn: "",
				pcsPowerdByIntelTurnedOff: "",
				pcsPowerdByCompetitorTurnedOn: "",
				pcsPowerdByCompetitorTurnedOff: "",

			},
		};

		this.props.setIsLoading(true);
	}

	componentDidMount() {
		try {
			// AsyncStorage.clear(() => {});
      // AsyncStorage.getItem('visitFormTemplate').then((_visitFormTemplate) => {
			// 	if (_visitFormTemplate === null){
			// 		AsyncStorage.setItem('visitFormTemplate', JSON.stringify(visitFormTemplate));
			// 		this.setState({
			// 			formTemplate: visitFormTemplate,
			// 		});
			// 		this.props.setIsLoading(false);	
      //   } else {
			// 		AsyncStorage.getItem('visitFormTemplate').then((_visitFormTemplate) => {
			// 			if (_visitFormTemplate !== null) {
			// 				this.setState({
			// 					formTemplate: JSON.parse(_visitFormTemplate),
			// 				});
			// 				this.props.setIsLoading(false);
			// 			}
			// 		});
			// 	}
      // });
			this.setState({
				formTemplate: visitFormTemplate,
			} , () => {
				this.props.setIsLoading(false);
			});
    } catch (error) {
			throw new Error (error);
    }
	}

	addOneDataGridItem = (key, gridItem) => {
		const formData = this.state.formData;
		formData[key] = [...formData[key], gridItem];

		this.setState({
			formData,
		});
	}

	onChange = (value, stepIndex, formFieldIndex, handleChangeData) => {
		const {formLayoutIndex, formLayoutType} = handleChangeData;

		const _visitForm = this.state.visitForm;

		if (formLayoutType === "fieldset" || formLayoutType === "well") {
			const fieldType = _visitForm[stepIndex].components[formLayoutIndex].components[formFieldIndex].type;

			if (fieldType === "file") {
				if (_visitForm[stepIndex].components[formLayoutIndex].components[formFieldIndex].images) {
					_visitForm[stepIndex].components[formLayoutIndex].components[formFieldIndex].images =
						[..._visitForm[stepIndex].components[formLayoutIndex].components[formFieldIndex].images, value];
				} else {
					_visitForm[stepIndex].components[formLayoutIndex].components[formFieldIndex].images = [value];
				}
			} else {
				_visitForm[stepIndex].components[formLayoutIndex].components[formFieldIndex].defaultValue = value;
			}
		} else if (formLayoutType === "panel") {
			const {isTable, rowIndex, columnIndex} = handleChangeData;

			if (isTable) {
				_visitForm[stepIndex].components[formLayoutIndex].components[FIRST_INDEX].rows[rowIndex][columnIndex].components[formFieldIndex].defaultValue = value;
			}
		} else if (formLayoutType === "datagrid") {
			const {tableIndex, rowIndex, columnIndex} = handleChangeData;
			_visitForm[stepIndex].components[formLayoutIndex].components[tableIndex].rows[rowIndex][columnIndex].components[formFieldIndex].defaultValue = value;
		}

		this.setState({
			visitForm: _visitForm,
		});
	}

	saveCapturedImg = (key, image) => {
		const formData = this.state.formData;
		formData[key] = [...formData[key], image];

		this.setState({
			formData,
		});
	}

	saveFormToAsyncStorage = () => {
		AsyncStorage.setItem('visitForm', JSON.stringify(this.state.visitForm));
	}

	handleFormDataChange = (key, value, formLayout) => {
		const formData = this.state.formData;

		if (!formLayout) {
			formData[key] = value;
    } else if (formLayout.gridItemKey) {
			formData[formLayout.gridItemKey][formLayout.gridItemIndex][key] = value;
    }
		
		this.setState({
			formData,
		});
	}

	render() {
		if (this.state.formTemplate) {
			return (
				<StoreVisit
					formData={this.state.formData}
					formTemplate={this.state.formTemplate}
					navigation={this.props.navigation}
					saveCapturedImg={this.saveCapturedImg}
					addOneDataGridItem={this.addOneDataGridItem}
					handleFormDataChange={this.handleFormDataChange}
					saveFormToAsyncStorage={this.saveFormToAsyncStorage}
				/>
			);
		}

		return null;
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
