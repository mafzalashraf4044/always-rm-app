// @flow
import * as React from "react";
import { connect } from "react-redux";
import AddEditStore from "../../components/AddEditStore";

import { addStore, editStore, setIsLoading } from "../../actions";

export interface Props {
	navigation: any,
}

export interface State {}

class AddEditStoreContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);
	
		const { params } = this.props.navigation.state;
		this.state = {
			store: !params.isEdit ? {
				name: "",
				status: "",
				storeID: "",
				retailerName: "",
				primaryManagerName: "",
				managerContact: "",
				addressLine1: "",
				addressLine2: "",
				postalCode: "",
				computerMall: "",
				country: "",
			} : params.store,
		}
	}

	saveStore = () => {
		const { params } = this.props.navigation.state;
		if (!params.isEdit) this.addStore();
		else if (params.isEdit) this.editStore();
	}

	addStore = () => {
		this.props.setIsLoading(true);
		this.props.addStore(this.state.store).then((res) => {
			if (res.status === 200) {
				this.props.setIsLoading(false);
			}
		}).catch((err) => {
			alert(JSON.stringify(err));
			this.props.setIsLoading(false);
		});
	}

	editStore = () => {
		this.props.setIsLoading(true);
		this.props.editStore(this.state.store._id, this.state.store).then((res) => {
			if (res.status === 200) {

			}
			this.props.setIsLoading(false);
		}).catch((err) => {
			this.props.setIsLoading(false);
		});
	}

	handleChange = (key, value) => {
		this.setState(prevState => ({
			store: {...prevState.store, [key]: value}
		}));
	}

	render() {
		return (
			<AddEditStore
				store={this.state.store}
				saveStore={this.saveStore}
				countries={this.props.countries}
				handleChange={this.handleChange}
				navigation={this.props.navigation}
			/>
		);
	}
}

const mapStateToProps = state => ({
	countries: state.reducer.countries,
});

const mapDispatchToProps = (dispatch) => {
	return {
		setIsLoading: isLoading => dispatch(setIsLoading(isLoading)),
		addStore: store => dispatch(addStore(store)),
		editStore: (storeId, store) => dispatch(editStore(storeId, store)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditStoreContainer);

