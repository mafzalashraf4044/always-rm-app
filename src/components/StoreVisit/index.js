import * as React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Header from "../common/Header";
import FormRenderer from "../common/FormRenderer";

import styles from "./styles";

export interface Props {
  navigation: any,
}

class StoreVisit extends React.Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
      stepIndex: 0,
    };
  }

  setStepIndex = (stepIndex) => {
    this.setState({
      stepIndex,
    }, () => {
      this.scrollView.scrollTo({y: 0, animated: false});
    });
  }

  getTitle = () => {
    if (this.state.stepIndex !== -1) {
      return this.props.formTemplate[this.state.stepIndex].title;
    }

    return "";
  }

  goBack = () => {
    if (this.state.stepIndex === 0) {
      this.props.navigation.goBack();
    } else {
      this.setState(prevState => ({
        stepIndex: prevState.stepIndex - 1,
      }), () => {
        this.scrollView.scrollTo({y: 0, animated: false});
      });
    }
  }

	render() {
    return (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="position" enabled keyboardVerticalOffset={-80}>
        <ScrollView
          endFillColor="#fff"
          style={styles.storeVisit}
          ref={(scrollView) => this.scrollView = scrollView}
        >
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

          {
            this.state.stepIndex !== -1 ?
            <FormRenderer
              formData={this.props.formData}
              stepIndex={this.state.stepIndex}
              setStepIndex={this.setStepIndex}
              navigation={this.props.navigation}
              stepsLength={this.props.formTemplate.length}
              saveCapturedImg={this.props.saveCapturedImg}
              addOneDataGridItem={this.props.addOneDataGridItem}
              appendNewRspToList={this.props.appendNewRspToList}
              handleFormDataChange={this.props.handleFormDataChange}
              saveFormToAsyncStorage={this.props.saveFormToAsyncStorage}
              stepTemplate={this.props.formTemplate[this.state.stepIndex]}
            /> : null
          }
        </ScrollView>
      </KeyboardAvoidingView>
		);
	}
}

export default StoreVisit;
