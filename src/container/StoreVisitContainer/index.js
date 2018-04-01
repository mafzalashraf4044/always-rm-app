// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import StoreVisit from "../../components/StoreVisit";

// import { fetchList } from "./actions";

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
			visitForm: null,
		};
	}

	componentDidMount() {
		try {
      AsyncStorage.getItem('visitForm').then((visitForm) => {
				if (visitForm === null){
					AsyncStorage.setItem('visitForm', JSON.stringify(visitFormTemplate));
					this.setState({
						visitForm: visitFormTemplate,
					});			
        } else {
					AsyncStorage.getItem('visitForm').then((visitForm) => {
						if (visitForm !== null){
							this.setState({
								visitForm: JSON.parse(visitForm),
							});
						}
					});
				}
      });
    } catch (error) {
			// alert(JSON.stringify(error))
			// Error retrieving data
			throw new Error (error);
    }
	}

	addOneDataGridItem = (stepIndex, formLayoutIndex) => {
		const dataGridTemplate = visitFormTemplate[stepIndex].components[formLayoutIndex].components[FIRST_INDEX];
		const dataGridItems = this.state.visitForm[stepIndex].components[formLayoutIndex].components;
		const _visitForm = this.state.visitForm;
		_visitForm[stepIndex].components[formLayoutIndex].components = [...dataGridItems, dataGridTemplate];
	
		this.setState({
			visitForm: _visitForm,
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

	saveCapturedImg = (image, stepIndex, formFieldIndex, handleChangeData) => {
		const {formLayoutIndex, formLayoutType} = handleChangeData;

		const _visitForm = this.state.visitForm;

	}

	saveFormToAsyncStorage = () => {
		AsyncStorage.setItem('visitForm', JSON.stringify(this.state.visitForm));
	}

	render() {
		if (this.state.visitForm) {
			return (
				<StoreVisit
					onChange={this.onChange}
					visitForm={this.state.visitForm}
					navigation={this.props.navigation}
					saveCapturedImg={this.saveCapturedImg}
					addOneDataGridItem={this.addOneDataGridItem}
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
		// fetchList: url => dispatch(fetchList(url)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreVisitContainer);
