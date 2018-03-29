import * as React from "react";

import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

import Header from "../common/Header";
import FormRenderer from "../common/FormRenderer";

import styles from "./styles";
import { getSizeWRTDeviceWidth } from "../../utils";

const FIRST_INDEX = 0;

export interface Props {
  navigation: any,
}

export interface State {}

class StoreVisit extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			isStoreImgContainerVisible: true,
      stepIndex: -1,
    };
	}
  
  componentDidMount() {
    this.setState(prevState => ({
      visitForm: this.props.visitForm,
      stepIndex: prevState.stepIndex + 1,
    }));
  }
  
  setStepIndex = (stepIndex) => {
    this.setState({
      stepIndex,
    });
  }

	handleChange = (key, value) => {
		this.setState({
			[key]: value
		});
	}

  getTitle = () => {
    if (this.state.stepIndex !== -1) {
      return this.state.visitForm[this.state.stepIndex].title;
    }

    return "";
  }

  goBack = () => {
    if (this.state.stepIndex === -1) {
      this.props.navigation.goBack();
    } else {
      this.setState(prevState => ({
        stepIndex: prevState.stepIndex - 1,
      }));
    }
  }

	render() {

    return (
			<View style={styles.storeVisit}>
				{
					this.state.isStoreImgContainerVisible && 
					<View style={styles.storeImgContainer}>
            <Image
              style={styles.backgroundImg}
              source={require("../../assets/Images/card-image.jpg")}
            />
						<Header
							title={this.getTitle()}
							navigation={this.props.navigation}
							iconLeft={{
								url: require("../../assets/Icons/Light/Back.png"),
								onPress: this.goBack,
							}}
							iconsRight={[{
								url: require("../../assets/Icons/Light/Edit.png"),
								onPress: () => this.props.navigation.navigate("AddEditStore", {isEdit: true}),
							}]}
            />
            <View style={styles.storeInfo}>
              <View style={styles.infoText}>
                <Text style={styles.storeID}>Store ID: 124124</Text>
                <Text style={styles.storeName}>Hervy Norman</Text>
                <Text style={styles.storeManager}>Store Manager: Alwyn Lao</Text>
                <Text style={styles.lastSaved}>Last saved on 14/02/2018 / 1:24:11pm</Text>
              </View>
            </View>
					</View>
        }

        {
          this.state.stepIndex !== -1 ?
          <View style={styles.visitForm}>
            <ScrollView endFillColor="#fff" style={styles.scrollView}>
              <FormRenderer
                stepIndex={this.state.stepIndex}
                setStepIndex={this.setStepIndex}
                onChange={this.props.onChange}
                addOneDataGridItem={this.props.addOneDataGridItem}
                form={this.state.visitForm[this.state.stepIndex]}
              />
            </ScrollView>
          </View> : null
        }

			</View>
		);
	}
}

export default StoreVisit;
