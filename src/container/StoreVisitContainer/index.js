// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import StoreVisit from "../../components/StoreVisit";

import { setIsLoading } from "../../actions";

import { rcrFormTemplate } from "./data";

const FIRST_INDEX = 0;

export interface Props {
	navigation: any,
}

export interface State {}

class StoreVisitContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			formData: {
				// step 0
				storeStatus: "",
				visitNumber: "",

				// step 1
				noOfRspsOnDutyDuringVisit: "",

				// step 2
				noOfRspsWhoAttendedFaceToFaceTraining: "",
				noOfIrepCoursesCompletedDuringVisit: "",
				faceToFaceTraining: [
					{
						trainingCourse: "",
						trainingDone: false,
					}
				],
				trainingActivityImages: [],

				// step 3.1
				canStoreDeployPosm: false,
				posm: false,
				twoInOnePcs: "",
				laptops: "",
				allIn1Pcs: "",
				merchandisingImages: [],

				// step 3.2
				iposRxtInstallation: false,
				currentInStore: "",
				newInstallation: "",
				totIposRxtInstallation: "",
				iposRxtInstallationImages: [],

				// step 3.3
				rxtSubmission: "",
				totalPcsInStore: "",
				pcsPowerdByIntelTurnedOn: "",
				pcsPowerdByIntelTurnedOff: "",
				pcsPowerdByCompetitorTurnedOn: "",
				pcsPowerdByCompetitorTurnedOff: "",

				// step 4
				competitorAnaylsis: [
					{
						competitorName: "",
						noOfCompetitorPcs: "",
						posmInstalled: "",
						description: "",
						pcBrand: "",
						pcDescription: "",
						competitorImages: [],
					},
				],

				// step 5.1
				current2in1Zone: "",
				outdated2in1Zone: "",
				refrestDeploymentOpportunity2in1Zone: "",
				storeAnalysisDescription2in1Zone: "",
				storeAnalysisPCImages2in1Zone: [],

				// step 5.2
				currentGamingZone: "",
				outdatedGamingZone: "",
				refrestDeploymentOpportunityGamingZone: "",
				storeAnalysisDescriptionGamingZone: "",
				storeAnalysisPCImagesGamingZone: [],

				// step 5.3
				currentEndCapDisplay: "",
				intelRiserDeployedInStore: false,
				promotionUpdates: false,
				storeAnalysisDescriptionEndCapDisplay: "",
				storeAnalysisPCImagesEndCapDisplay: [],

				// step 5.4
				newLaunchProductUpdates: false,
				newLaunchProduct: [
					{
						brand: "",
						model: "",
						specifications: "",
						price: "",
						description: "",
						images: [],
					}
				],

				// step 5.5
				oemUpdates: false,
				oem: [
					{
						name: "",
						description: "",
						images: [],
					}
				],

				// step 5.6
				eventUpdates: false,
				event: [
					{
						name: "",
						date: "",
						description: "",
						images: [],
					}
				],

				// step 5.7
				remark: "",
				otherRemarks: "",

				// step 6
				submitName: "",
				submitJobTitle: "",
			},
		};

		this.props.setIsLoading(true);
	}

	componentDidMount() {
		try {
			// AsyncStorage.clear(() => {});
      AsyncStorage.getItem("formData").then((_formData) => {
				if (_formData !== null){
						this.setState({
							formData: JSON.parse(_formData),
						}, () => {
							this.props.setIsLoading(false);
						});
        } else {
					this.props.setIsLoading(false);
				}
			});

    } catch (error) {
			throw new Error (error);
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
		AsyncStorage.setItem("formData", JSON.stringify(this.state.formData));
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
			<StoreVisit
				formData={this.state.formData}
				formTemplate={rcrFormTemplate}
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

export default connect(mapStateToProps, mapDispatchToProps)(StoreVisitContainer);
