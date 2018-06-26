import * as React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import Modal from "react-native-modal";
import { Button } from "native-base";
import { TextField } from "react-native-material-textfield";

import Header from "../common/Header";
import { Dropdown } from "../common/Dropdown";
import SignaturePad from "../common/SignaturePad";

import styles from "./styles";
import formStyles from "../common/FormRenderer/styles";
import { getSizeWRTDeviceWidth, deviceHeight } from "../../utils";

export interface Props {
  navigation: any,
}

class SKUVisit extends React.Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
			isStoreImgContainerVisible: true,
      stepIndex: 0,
      submissionConfirmationModal: false,
      submissionSuccessModal: false,
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
      return "Step 1";
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

  signaturePadError = (error) => {};

  clearSignature = (formField, formLayout) => {
    this.props.handleFormDataChange(formField.key, "", formLayout);    
  }

  signaturePadChange = (base64DataUrl, formField, formLayout) => {
    this.props.handleFormDataChange(formField.key, base64DataUrl, formLayout);
  };

  continue = () => {
    this.props.saveFormToAsyncStorage();
    this.setStepIndex(this.props.stepIndex + 1);
  }

  saveAndExit = () => {
    this.props.saveFormToAsyncStorage();
    this.props.navigation.navigate("SKUAnalysis");
  }

  submit = () => {
    this.props.saveFormToAsyncStorage();

    this.setState({
      submissionConfirmationModal: false,
      submissionSuccessModal: true,
    });
  }

  toggleSubmissionConfirmationModal = () => {
    this.setState(prevState => ({
      submissionConfirmationModal: !prevState.submissionConfirmationModal,
    }));
  }

  goToHomePage = () => {
    this.setState({
      submissionSuccessModal: false,
    }, () => {
      this.props.navigation.navigate("SKUAnalysis");
    });
  }

	render() {
    const formViewStyles = {height: 0.7 * deviceHeight, justifyContent: "space-between"};

    const textFieldProps = {
      lineWidth:0,
      textColor:"#000",
      baseColor:"rgba(147,147,147,1)",
      tintColor:"rgba(147,147,147,1)",
      fontSize:getSizeWRTDeviceWidth(14),
      labelFontSize:getSizeWRTDeviceWidth(12),
      inputContainerStyle:{borderBottomWidth: 0.8, borderBottomColor: "#000", marginTop: getSizeWRTDeviceWidth(-10)},
      labelTextStyle:{top: getSizeWRTDeviceWidth(-4)},
    };

    return (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="position" enabled keyboardVerticalOffset={-80}>
        <ScrollView
          endFillColor="#fff"
          style={styles.skuVisit}
          ref={(scrollView) => this.scrollView = scrollView}
        >
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

          <View
            style={[formStyles.formView, true && formViewStyles]}
          >
            <View style={formStyles.formLayouts}>
              <View style={[formStyles.formLayout]}>
                <View style={formStyles.headingContainer}>
                  <Text style={formStyles.headingTxt}>SKU List</Text>
                </View>

                <TextField
                  value=""
                  label="SKU Item"
                  {...textFieldProps}
                  // keyboardType={formField.keyboardType || "default"}
                  onChangeText={(value) => {}}
                />
              </View>
            </View>

            {
              // this.props.stepTemplate.startBtn ?
              true ?
              <View style={formStyles.formActions}>
                <Button block onPress={this.continue} style={formStyles.startBtn}>
                  <Text style={formStyles.startBtnTxt}>START</Text>
                </Button>
              </View> :
              <View style={formStyles.formActions}>
                <Button onPress={this.saveAndExit} style={formStyles.lightBtn}>
                  <Text style={formStyles.lightBtnTxt}>SAVE & EXIT</Text>
                </Button>
                {
                  (this.props.stepIndex !== this.props.stepsLength - 1) ?
                  <Button onPress={() => this.setStepIndex(this.props.stepIndex + 1)} style={formStyles.darkBtn}>
                    <Text style={formStyles.darkBtnTxt}>CONTINUE</Text>
                  </Button> :
                  <Button block onPress={this.toggleSubmissionConfirmationModal} style={formStyles.darkBtn}>
                    <Text style={formStyles.darkBtnTxt}>SUBMIT</Text>
                  </Button>
                }
              </View>
            }

            {
              this.state.submissionConfirmationModal ?
              <Modal
                isVisible={this.state.submissionConfirmationModal}
                style={formStyles.modalContainer}
              >
                <View style={formStyles.modal}>
                  <View style={formStyles.header}>
                    <Text style={formStyles.headerTxt}>Confirm Submission</Text>
                  </View>
                  <View style={formStyles.body}>
                    <Text style={formStyles.bodyTxt}>You are submitting data reports for Harvey Norman on 05/04/2018</Text>

                    <View style={formStyles.submissionModalActions}>
                      <TouchableOpacity
                        style={[formStyles.submissionModalActionBtn, {backgroundColor: "transparent"}]}
                        onPress={this.toggleSubmissionConfirmationModal}>
                        <Text style={[formStyles.submissionModalActionBtnTxt, {color: "rgba(233,30,99,1)"}]}>CANCEL</Text>
                      </TouchableOpacity>
                      <Button
                        style={formStyles.submissionModalActionBtn}
                        onPress={this.submit}>
                        <Text style={formStyles.submissionModalActionBtnTxt}>CONFIRM</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </Modal> : null
            }

            {
              this.state.submissionSuccessModal ?
              <Modal
                isVisible={this.state.submissionSuccessModal}
                style={formStyles.modalContainer}
              >
                <View style={formStyles.modal}>
                  <View style={formStyles.header}>
                    <Text style={formStyles.headerTxt}>Confirm Successful!</Text>
                  </View>
                  <View style={formStyles.body}>
                    <Text style={formStyles.bodyTxt}>You have successfully submitted data reports for Harvey Norman on 05/04/2018</Text>

                    <View style={[formStyles.submissionModalActions, {justifyContent: "center"}]}>
                      <Button
                        style={formStyles.submissionModalActionBtn}
                        onPress={this.goToHomePage}>
                        <Text style={formStyles.submissionModalActionBtnTxt}>BACK TO HOMEPAGE</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </Modal> : null
            }
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
		);
	}
}

export default SKUVisit;
