import * as React from "react";

import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

import {
	Container,
	Button
} from "native-base";

import Header from "../common/Header";
import FormRenderer from "../common/FormRenderer";

import styles from "./styles";
import { getSizeWRTDeviceWidth } from "../../utils";

export interface Props {
  navigation: any,
}

export interface State {}

class StoreVisit extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			isStoreImgContainerVisible: true,
      // steps: [
      //   {title: "RSPs"},
      //   {title: "Training"},
      //   {title: "Merchandising"},
      //   {title: "Competitor Analysis"},
      //   {title: "Store Analysis"},
      // ],
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
    if ((this.state.stepIndex + 1) < 5) {
      this.setState({
        stepIndex,
      });
    }
  }

	handleChange = (key, value) => {
		this.setState({
			[key]: value
		});
	}

  getTitle = () => {
    if (this.state.stepIndex !== -1) {
      return `Step ${this.state.stepIndex + 1}: ${this.state.visitForm[this.state.stepIndex].title}`;
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
			<Container style={styles.storeVisit}>
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
                form={this.state.visitForm[this.state.stepIndex]}
              />
            </ScrollView>
          </View> : null
        }

			</Container>
		);
	}
}

export default StoreVisit;
