// @flow
import * as React from "react";
import { connect } from "react-redux";
import StoreVisit from "../../components/StoreVisit";

// import { fetchList } from "./actions";

import { visitForm } from "./data";

const FIRST_INDEX = 0;

export interface Props {
	navigation: any,
}

export interface State {}

class StoreVisitContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			visitForm,
		};
	}

	addOneDataGridItem = (stepIndex, formLayoutIndex) => {
		const dataGridTemplate = visitForm[stepIndex].components[formLayoutIndex].components[FIRST_INDEX]
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
			_visitForm[stepIndex].components[formLayoutIndex].components[formFieldIndex].defaultValue = value;
		} else if (formLayoutType === "panel") {
			const {isTable, rowIndex, columnIndex} = handleChangeData;

			if (isTable) {
				_visitForm[stepIndex].components[formLayoutIndex].components[FIRST_INDEX].rows[rowIndex][columnIndex].components[formFieldIndex].defaultValue = value;
			}
		}

		this.setState({
			visitForm: _visitForm,
		});

	}

	render() {
		return (
			<StoreVisit
				onChange={this.onChange}
				visitForm={this.state.visitForm}
				navigation={this.props.navigation}
				addOneDataGridItem={this.addOneDataGridItem}
			/>
		);
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
