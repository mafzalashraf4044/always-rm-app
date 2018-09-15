import * as React from "react";

import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import {Image as CacheableImage} from "react-native-expo-image-cache";

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
      stepIndex: 14,
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
    const {store} = this.props;

    return (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="position" enabled keyboardVerticalOffset={-80}>
        <ScrollView
          endFillColor="#fff"
          style={styles.storeVisit}
          ref={(scrollView) => this.scrollView = scrollView}
        >
          <View style={styles.storeImgContainer}>
            {
              store.image && store.image.url ?
              <CacheableImage
                style={styles.backgroundImg}
                {...{uri: store.image.url}}
              /> : null
            }
            <Header
              title={this.getTitle()}
              navigation={this.props.navigation}
              iconLeft={{
                url: require("../../assets/Icons/Light/Back.png"),
                onPress: this.goBack,
              }}
              iconsRight={[{
                url: require("../../assets/Icons/Light/Edit.png"),
                onPress: () => this.props.navigation.navigate("AddEditStore", {isEdit: true, store: this.props.store}),
              }]}
            />
            <View style={styles.storeInfo}>
              <View style={styles.infoText}>
                <Text style={styles.storeID}>Store ID: {store.id}</Text>
                <Text style={styles.storeName}>{store.name}</Text>
                <Text style={styles.storeManager}>Store Manager: {store.primaryManagerName}</Text>
              </View>
            </View>
          </View>

          {
            this.state.stepIndex !== -1 ?
            <FormRenderer
              store={store}
              formData={this.props.formData}
              stepIndex={this.state.stepIndex}
              setStepIndex={this.setStepIndex}
              navigation={this.props.navigation}
              submitForm={this.props.submitForm}
              disableEditing={this.props.disableEditing}
              stepsLength={this.props.formTemplate.length}
              saveCapturedImg={this.props.saveCapturedImg}
              addOneDataGridItem={this.props.addOneDataGridItem}
              appendNewRspToList={this.props.appendNewRspToList}
              signaturePadChange={this.props.signaturePadChange}
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
