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
import { getSizeWRTDeviceWidth, deviceHeight } from "../../utils";

export interface Props {
  navigation: any,
}

class SKUVisit extends React.Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
      stepIndex: 0,
      steps: [
        {
          "title": "Step 1.1: SKU List",
          fullHeight: true,
        },
        {
          "title": "Step 1.2: Add Product Details",
          fullHeight: false,
        },
        {
          "title": "Step 1.3: Add Product Details",
          fullHeight: false,
        },
        {
          "title": "Step 2: Submit",
          fullHeight: false,
        },
      ],
			isStoreImgContainerVisible: true,
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
    this.setStepIndex(this.state.stepIndex + 1);
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
          <View style={styles.storeImgContainer}>
            <Image
              style={styles.backgroundImg}
              source={require("../../assets/Images/card-image.jpg")}
            />
            <Header
              title={this.state.steps[this.state.stepIndex].title}
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

          <View
            style={[styles.formView, this.state.steps[this.state.stepIndex].fullHeight && formViewStyles]}
          >
            {
              this.state.stepIndex === 0 ?
              <View style={styles.formLayouts}>
                <View style={styles.formLayout}>
                  <View style={styles.skuListHeadingContainer}>
                    <Text style={styles.headingTxt}>SKU List</Text>
                    <Button onPress={() => {}} style={styles.addOneMoreBtn}>
                      <Image
                        style={styles.addIcon}
                        source={require("../../assets/Icons/Light/Add.png")}
                      />
                      <Text style={styles.addOneMoreBtnTxt}>ADD NEW SKU (1)</Text>
                    </Button>
                  </View>

                  <View style={styles.skuList}>
                    {
                      this.props.formData.skuList.map((gridItem, gridItemIndex) => {
                        return (
                          <View style={styles.skuListItem} key={gridItemIndex}>
                            <View style={styles.skuListItemOem}>
                              <Text style={styles.skuListItemOemTxt}>{gridItem.oem}</Text>
                            </View>
                            <View style={styles.skuListItemModelInfo}>
                              <Text style={styles.skuListItemSeriesTxt}>{gridItem.series}</Text>
                              <Text style={styles.skuListItemModelNoTxt}>{gridItem.modelNumber}</Text>
                            </View>
                            <View style={styles.skuListItemEditBtnContainer}>
                              <Button onPress={() => {}} style={styles.skuListItemEditBtn}>
                                <Text style={styles.skuListItemEditBtnTxt}>EDIT</Text>
                              </Button>
                            </View>
                          </View>
                        );
                      })
                    }
                  </View>
                </View>
              </View> : null
            }

            {
              this.state.stepIndex === 1 ?
              <View style={styles.formLayouts}>
                <View style={styles.formLayout}>
                  <View style={styles.headingContainer}>
                    <Text style={styles.headingTxt}>Product Details</Text>
                  </View>

                  <Dropdown
                    fullWidth
                    value=""
                    label="OEM"
                    data={[{
                      value: "hp",
                      label: "Hewlett Packard",
                    }, {
                      value: "dell",
                      label: "Dell",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Series"
                    data={[{
                      value: "hp-14",
                      label: "HP-14",
                    }, {
                      value: "d-22",
                      label: "D-22",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <TextField
                    value=""
                    label="Model Number"
                    {...textFieldProps}
                    keyboardType="default"
                    onChangeText={(value) => {}}
                  />

                  <TextField
                    value=""
                    label="OEM Series Model Number"
                    {...textFieldProps}
                    keyboardType="default"
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Form Factor"
                    data={[{
                      value: "laptop",
                      label: "Laptop",
                    }, {
                      value: "pc",
                      label: "PC",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Processor Brand"
                    data={[{
                      value: "intel",
                      label: "Intel",
                    }, {
                      value: "amd",
                      label: "AMD",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Processor Generation"
                    data={[{
                      value: "1st",
                      label: "1st",
                    }, {
                      value: "2nd",
                      label: "2nd",
                    }, {
                      value: "3rd",
                      label: "3rd",
                    }, {
                      value: "4th",
                      label: "4th",
                    }, {
                      value: "5th",
                      label: "5th",
                    }, {
                      value: "6th",
                      label: "6th",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Processor Range"
                    data={[{
                      value: "i3",
                      label: "i3",
                    }, {
                      value: "i5",
                      label: "i5",
                    }, {
                      value: "i7",
                      label: "i7",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <TextField
                    value=""
                    label="Processor Number"
                    {...textFieldProps}
                    keyboardType="default"
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Operating System"
                    data={[{
                      value: "windows10",
                      label: "Windows 10",
                    }, {
                      value: "windows7",
                      label: "Windows 7",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <TextField
                    value=""
                    label="Processor Information"
                    {...textFieldProps}
                    keyboardType="default"
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Gaming"
                    data={[{
                      value: "yes",
                      label: "Yes",
                    }, {
                      value: "no",
                      label: "No",
                    }]}
                    onChangeText={(value) => {}}
                  />

                </View>
              </View> : null
            }

            {
              this.state.stepIndex === 2 ?
              <View style={styles.formLayouts}>
                <View style={styles.formLayout}>
                  <View style={styles.headingContainer}>
                    <Text style={styles.headingTxt}>Product Details</Text>
                  </View>

                  <View style={styles.columns}>
                    <View style={styles.column}>
                      <Dropdown
                        value=""
                        label="Storage 1"
                        data={[{
                          value: "hdd",
                          label: "HDD",
                        }, {
                          value: "sdd",
                          label: "SDD",
                        }]}
                        onChangeText={(value) => {}}
                      />
                    </View>

                    <View style={styles.column}>
                      <Dropdown
                        value=""
                        label="GB 1"
                        data={[{
                          value: "1tb",
                          label: "1 TB",
                        }, {
                          value: "2tb",
                          label: "2 TB",
                        }]}
                        onChangeText={(value) => {}}
                      />
                    </View>
                  </View>

                  <View style={styles.columns}>
                    <View style={styles.column}>
                      <Dropdown
                        value=""
                        label="Storage 2"
                        data={[{
                          value: "hdd",
                          label: "HDD",
                        }, {
                          value: "sdd",
                          label: "SDD",
                        }]}
                        onChangeText={(value) => {}}
                      />
                    </View>

                    <View style={styles.column}>
                      <Dropdown
                        value=""
                        label="GB 2"
                        data={[{
                          value: "1tb",
                          label: "1 TB",
                        }, {
                          value: "2tb",
                          label: "2 TB",
                        }]}
                        onChangeText={(value) => {}}
                      />
                    </View>
                  </View>

                  <Dropdown
                    fullWidth
                    value=""
                    label="Memory"
                    data={[{
                      value: "4gb",
                      label: "4 GB",
                    }, {
                      value: "8gb",
                      label: "8 GB",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <TextField
                    value=""
                    label="Graphics"
                    {...textFieldProps}
                    keyboardType="default"
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Graphics Type"
                    data={[{
                      value: "integrated",
                      label: "Integrated Graphics",
                    }, {
                      value: "external",
                      label: "External Card",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Screen Size (in)"
                    data={[{
                      value: "14",
                      label: "14",
                    }, {
                      value: "19",
                      label: "19",
                    }, {
                      value: "21",
                      label: "21",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Screen"
                    data={[{
                      value: "1366x768",
                      label: "1366x768",
                    }, {
                      value: "1024x768",
                      label: "1024x768",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <Dropdown
                    fullWidth
                    value=""
                    label="Touch Enabled"
                    data={[{
                      value: "yes",
                      label: "Yes",
                    }, {
                      value: "no",
                      label: "No",
                    }]}
                    onChangeText={(value) => {}}
                  />

                  <TextField
                    value=""
                    multiline
                    label="Promotion/Bundle"
                    {...textFieldProps}
                    keyboardType="default"
                    onChangeText={(value) => {}}
                  />

                  <TextField
                    value=""
                    label="Local Currency"
                    {...textFieldProps}
                    keyboardType="default"
                    onChangeText={(value) => {}}
                  />

                </View>
              </View> : null
            }

            {
              this.state.stepIndex === 3 ?
              <View style={styles.formLayouts}>
                <View style={styles.formLayout}>
                  <TextField
                    value=""
                    label="Name"
                    {...textFieldProps}
                    keyboardType="default"
                    onChangeText={(value) => {}}
                  />

                  <View style={styles.signatureContainer}>
                    <View style={styles.signature}>
                      <SignaturePad
                        onError={this.signaturePadError}
                        onChange={({base64DataUrl}) => {}}
                        style={{flex: 1, backgroundColor: "white"}}
                      />
                    </View>
                  </View>
                </View>
              </View> : null
            }

            {
              this.state.stepIndex === 0 ?
              <View style={styles.formActions}>
                <Button block onPress={this.continue} style={styles.startBtn}>
                  <Text style={styles.startBtnTxt}>START</Text>
                </Button>
              </View> :
              <View style={styles.formActions}>
                <Button onPress={this.saveAndExit} style={styles.lightBtn}>
                  <Text style={styles.lightBtnTxt}>SAVE & EXIT</Text>
                </Button>
                {
                  (this.state.stepIndex !== this.state.steps.length - 1) ?
                  <Button onPress={() => this.setStepIndex(this.state.stepIndex + 1)} style={styles.darkBtn}>
                    <Text style={styles.darkBtnTxt}>CONTINUE</Text>
                  </Button> :
                  <Button block onPress={this.toggleSubmissionConfirmationModal} style={styles.darkBtn}>
                    <Text style={styles.darkBtnTxt}>SUBMIT</Text>
                  </Button>
                }
              </View>
            }

            {
              this.state.submissionConfirmationModal ?
              <Modal
                isVisible={this.state.submissionConfirmationModal}
                style={styles.modalContainer}
              >
                <View style={styles.modal}>
                  <View style={styles.header}>
                    <Text style={styles.headerTxt}>Confirm Submission</Text>
                  </View>
                  <View style={styles.body}>
                    <Text style={styles.bodyTxt}>You are submitting data reports for Harvey Norman on 05/04/2018</Text>

                    <View style={styles.submissionModalActions}>
                      <TouchableOpacity
                        style={[styles.submissionModalActionBtn, {backgroundColor: "transparent"}]}
                        onPress={this.toggleSubmissionConfirmationModal}>
                        <Text style={[styles.submissionModalActionBtnTxt, {color: "rgba(233,30,99,1)"}]}>CANCEL</Text>
                      </TouchableOpacity>
                      <Button
                        style={styles.submissionModalActionBtn}
                        onPress={this.submit}>
                        <Text style={styles.submissionModalActionBtnTxt}>CONFIRM</Text>
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
                style={styles.modalContainer}
              >
                <View style={styles.modal}>
                  <View style={styles.header}>
                    <Text style={styles.headerTxt}>Confirm Successful!</Text>
                  </View>
                  <View style={styles.body}>
                    <Text style={styles.bodyTxt}>You have successfully submitted data reports for Harvey Norman on 05/04/2018</Text>

                    <View style={[styles.submissionModalActions, {justifyContent: "center"}]}>
                      <Button
                        style={styles.submissionModalActionBtn}
                        onPress={this.goToHomePage}>
                        <Text style={styles.submissionModalActionBtnTxt}>BACK TO HOMEPAGE</Text>
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
