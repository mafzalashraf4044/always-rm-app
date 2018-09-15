/**
 * @author Afzal Ashraf <afzalashraf.dev@gmail.com>
 */

// @flow
import * as React from "react";

//	helpers
import _ from "lodash";

//	third party components
import { ImagePicker, Permissions } from "expo";

//	custom components
import AddEditStore from "../../components/AddEditStore";

//	redux
import { connect } from "react-redux";
import { addStore, editStore, setIsLoading, uploadImage, saveCountries, getCountries } from "../../actions";

export interface Props {
	navigation: obj,
	countries: array,
	addStore: func,
	editStore: func,
	setIsLoading: func,
	uploadImage: func,
	saveCountries: func,
	getCountries: func,
}

class AddEditStoreContainer extends React.Component<Props> {

	constructor(props) {
		super(props);

		const { params } = this.props.navigation.state;
		this.state = {
			store: !params.isEdit ? {
				name: "",
				description: "",
				status: "",
				id: "",
				image: null,
				primaryManagerName: "",
				contactPhone: "",
				addressLine1: "",
				addressLine2: "",
				postalCode: "",
				computerMall: "",
				country: "",
				retails: [{name: ""}],
			} : params.store,
			countries: [],
		};

	}

	componentWillMount() {
		if (this.props.countries.length === 0) {
			this.props.getCountries().then((res) => {
				if (res.status === 200) {
					const countries = res.data.map(country => ({
						value: JSON.stringify(country),
						label: country.name,
					}));

					this.props.saveCountries(countries);
				}
			}).catch((err) => {
				throw new Error(err);
			});
		}
	}

	saveStore = () => {
		const { params } = this.props.navigation.state;
		if (!params.isEdit) {
			this.addStore();
		} else {
			this.editStore();
		}
	}

	addStore = () => {
		const country = typeof this.state.store.country === "string" ? JSON.parse(this.state.store.country) : this.state.store.country; 

		this.props.setIsLoading(true);
		this.props.addStore({...this.state.store, country}).then((res) => {
			if (res.status === 200) {
				this.props.setIsLoading(false);
			}
			this.props.navigation.navigate("MyStores");
		}).catch((err) => {
			this.props.setIsLoading(false);
			throw new Error(err);
		});
	}

	editStore = () => {
		const country = typeof this.state.store.country === "string" ? JSON.parse(this.state.store.country) : this.state.store.country; 

		this.props.setIsLoading(true);
		this.props.editStore(this.state.store._id, {...this.state.store, country}).then((res) => {
			if (res.status === 200) {
				this.props.setIsLoading(false);
			}
			this.props.navigation.navigate("MyStores");
		}).catch((err) => {
			this.props.setIsLoading(false);
			throw new Error(err);
		});
	}

	handleChange = (key, value) => {
		if (key !== "retailerName") {
			this.setState(prevState => ({
				store: {...prevState.store, [key]: value}
			}));
		} else {
			this.setState(prevState => ({
				store: {...prevState.store, retails: [{name: value}]}
			}));
		}
	}

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
    });

    if (!result.cancelled) {
			this.props.setIsLoading(true);
			this.props.uploadImage(result.uri).then((res) => {
				if (res.status === 200) {
					this.handleChange("image", res.data[0]);
				}
				this.props.setIsLoading(false);
			}).catch((err) => {
				this.props.setIsLoading(false);
				throw new Error(err);
			});
    }
  };

  openCamera = () => {
    Permissions.askAsync(Permissions.CAMERA).then((camera) => {
      if (camera.status === "granted") {
        Permissions.askAsync(Permissions.CAMERA_ROLL).then((cameraRoll) => {
          if (cameraRoll.status === "granted") {
            ImagePicker.launchCameraAsync({
              allowsEditing: false,
              quality: 0.1,
            }).then((result) => {
							if (!result.cancelled) {
								this.props.setIsLoading(true);
								this.props.uploadImage(result.uri).then((res) => {
									if (res.status === 200) {
										this.handleChange("image", res.data[0]);
									}
									this.props.setIsLoading(false);
								}).catch((err) => {
									this.props.setIsLoading(false);
									throw new Error(err);
								});
							}
            });
          }
        });
      }
    });
  };

	render() {
		return (
			<AddEditStore
				store={this.state.store}
				saveStore={this.saveStore}
				pickImage={this.pickImage}
				openCamera={this.openCamera}
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
		uploadImage: image => dispatch(uploadImage(image)),
		editStore: (storeId, store) => dispatch(editStore(storeId, store)),
    saveCountries: countries => dispatch(saveCountries(countries)),
    getCountries: () => dispatch(getCountries()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditStoreContainer);

