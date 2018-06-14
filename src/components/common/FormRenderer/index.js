import * as React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";


import { Button, Spinner } from "native-base";
import Modal from "react-native-modal";
import { TextField } from "react-native-material-textfield";

import Switch from "../Switch";
import ImageGrid from "../ImageGrid";
import { Dropdown } from "../Dropdown";
import SignaturePad from "../ImageGrid";

import styles from "./styles";
import { getSizeWRTDeviceWidth, deviceWidth, deviceHeight } from "../../../utils";

const FIRST_INDEX = 0;

export interface Props {
  form: obj;
}

export interface State {}

class FormRenderer extends React.Component<Props, State> {
  state = {submissionConfirmationModal: false, submissionSuccessModal: false, isSignatureLoading: false};

  textFieldProps = {
    lineWidth:0,
    textColor:"#000",
    baseColor:"rgba(147,147,147,1)",
    tintColor:"rgba(147,147,147,1)",
    fontSize:getSizeWRTDeviceWidth(14),
    labelFontSize:getSizeWRTDeviceWidth(12),
    inputContainerStyle:{borderBottomWidth: 0.8, borderBottomColor: "#000", marginTop: getSizeWRTDeviceWidth(-10)},
    labelTextStyle:{top: getSizeWRTDeviceWidth(-4)},
  };

  signaturePadError = (error) => {
    alert(error);
  };

  clearSignature = (formField, formLayout) => {
    this.setSignatureLoading();
    this.props.handleFormDataChange(formField.key, "", formLayout);    
  }

  signaturePadChange = (base64DataUrl, formField, formLayout) => {
    this.props.handleFormDataChange(formField.key, base64DataUrl, formLayout);
  };

  setSignatureLoading = () => {
    this.setState({
      isSignatureLoading: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          isSignatureLoading: false,
        });
      }, 500);
    });
  }

  renderFormFields = (formField, formLayout = null) => {
    let value = "";

    if (!formLayout) {
      value = this.props.formData[formField.key];
    } else if (formLayout.gridItemKey) {
      value = this.props.formData[formLayout.gridItemKey][formLayout.gridItemIndex][formField.key];
    }

    if (formField.type === "textfield" || formField.type === "number") {
      return (
        <TextField
          key={formField.key}
          value={value}
          label={formField.label}
          {...this.textFieldProps}
          keyboardType={formField.keyboardType || "default"}
          onChangeText={(_value) => this.props.handleFormDataChange(formField.key, _value, formLayout)}
        />
      );
    } else if (formField.type === "select") {
      return (
        <Dropdown
          key={formField.key}
          value={value}
          label={formField.label}
          data={formField.data.values}
          onChangeText={(_value) => this.props.handleFormDataChange(formField.key, _value, formLayout)}
        />
      );
    } else if (formField.type === "switch") {
      return (
        <View style={styles.switchContainer} key={formField.key}>
          <Text style={styles.switchTxt}>{formField.label}</Text>
          <Switch
            value={value}
            onToggle={(_value) => this.props.handleFormDataChange(formField.key, _value, formLayout)}
          />
        </View>
      );
    } else if (formField.type === "checkbox") {
      return (
        <View style={styles.checkboxContainer} key={formField.key}>
          <Text style={styles.checkboxTxt}>{formField.label}</Text>
          <TouchableOpacity style={styles.checkbox} onPress={() => this.props.handleFormDataChange(formField.key, !value, formLayout)}>
            {
              value ?
              <View style={styles.checked}/> : null
            }
          </TouchableOpacity>
        </View>
      );
    } else if (formField.type === "htmlelement") {
      return (
        <Text style={styles.htmlElementTxt} key={formField.key}>{formField.label}</Text>
      )
    } else if (formField.type === "image") {
      return (
        <ImageGrid
          isAddEnabled={formField.isAddEnabled}
          images={value}
          key={formField.key}
          uniqueKey={formField.key}
          saveCapturedImg={(image) => this.props.saveCapturedImg(formField.key, image, formLayout)}
        />
      );
    } else if (formField.type === "divider") {
      return <View style={styles.divider} key={formField.key} />;
    } else if (formField.type === "signature") {
      return (
        <View style={styles.signatureContainer} key={formField.key}>
          {
            this.state.isSignatureLoading ?
            <View style={styles.signatureLoader}>
              <Spinner color="#000" />
            </View> : null
          }

          <View style={styles.signature}>
            {
              value ?
              <Image
                style={{width: "100%", height: "100%"}}
                source={{
                  uri: value,
                }}
              /> :
              <SignaturePad
                onError={this.signaturePadError}
                defaultHeight={deviceHeight}
                defaultWidth={deviceWidth}
                onChange={({base64DataUrl}) => this.signaturePadChange(base64DataUrl, formField, formLayout)}
                style={{flex: 1, backgroundColor: "white"}}
                key={new Date().getTime() + Math.floor(Math.random(100) * 100)}
              />
            }
          </View>
          {
            value ?
            <Button onPress={() => this.clearSignature(formField, formLayout)} style={styles.clearSignatureBtn}>
              <Image
                style={styles.clearSignatureIcon}
                source={require("../../../assets/Icons/Light/Delete.png")}
              />
            </Button> : null
          }
        </View>
      );
    } else if (formField.type === "topi") {
      return (
        <View style={{marginTop: getSizeWRTDeviceWidth(15)}} key="XYZ">
          <View style={styles.headingContainer}>
            <Text style={styles.headingTxt}>Current RSP List</Text>

            <Button onPress={() => {}} style={styles.addOneMoreBtn}>
              <Image
                style={styles.addIcon}
                source={require("../../../assets/Icons/Light/Add.png")}
              />
              <Text style={styles.addOneMoreBtnTxt}>ADD NEW RSP (4)</Text>
            </Button>
          </View>

          {
            [1,2,3,4].map((rsp, index) => (
              <View key={index} style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: getSizeWRTDeviceWidth(8),
              }}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                  <Text style={{
                    color: "rgba(74,74,74,1)",
                    backgroundColor: "transparent",
                    fontFamily: "Always_Font",
                    fontSize: getSizeWRTDeviceWidth(12),
                    lineHeight: getSizeWRTDeviceWidth(14),
                  }}>John Doe</Text>
                </View>
                <View style={{justifyContent: "center", alignItems: "flex-end"}}>
                  <Text style={{
                    color: "rgba(74,74,74,1)",
                    backgroundColor: "transparent",
                    fontFamily: "Always_Font",
                    fontSize: getSizeWRTDeviceWidth(12),
                    lineHeight: getSizeWRTDeviceWidth(14),
                    fontWeight: "normal",
                  }}>johndoe.always@gmail.com</Text>
                  <Text style={{
                    color: "rgba(74,74,74,1)",
                    backgroundColor: "transparent",
                    fontFamily: "Always_Font",
                    fontSize: getSizeWRTDeviceWidth(12),
                    lineHeight: getSizeWRTDeviceWidth(14),
                    fontWeight: "normal",
                  }}>+65 9876 4532</Text>
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                  <Button onPress={() => {}} style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: getSizeWRTDeviceWidth(36),
                    paddingVertical: getSizeWRTDeviceWidth(10),
                    paddingHorizontal: getSizeWRTDeviceWidth(20),
                    backgroundColor: "rgba(233,30,99,1)",
                  }}>
                    <Text style={{
                      color: "#FFF",
                      backgroundColor: "transparent",
                      fontFamily: "Always_Font",
                      fontSize: getSizeWRTDeviceWidth(14),
                      lineHeight: getSizeWRTDeviceWidth(16),
                    }}>EDIT</Text>
                  </Button>
                </View>
              </View>
            ))
          }
        </View>
      );
    }

    return null;
  }

  renderFormLayout = (formLayout, formLayoutIndex) => {
    if (formLayout.type === "formFieldSet") {
      return (
        <View style={[styles.formLayout]} key={formLayout.key}>
          {
            formLayout.legend ? 
            <View style={styles.headingContainer}>
              <Text style={styles.headingTxt}>{formLayout.legend}</Text>
            </View> : null
          }
          {
            formLayout.components.map((formField) => this.renderFormFields(formField))
          }
        </View>
      );      
    } else if (formLayout.type === "dataGridRowView") {
      return (
        <View style={styles.formLayout} key={formLayout.key}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingTxt}>{formLayout.label}</Text>
          </View>
          {
            this.props.formData[formLayout.key].map((gridItem, gridItemIndex) => {
              return (
                <View style={styles.dataGridRow} key={gridItemIndex}>
                  {
                    formLayout.row.columns.map((column) => {
                      return (
                        <View style={[styles.dataGridColumn, column.styles]} key={column.key}>
                          {
                            column.components.map((formField) => {
                              const _formField = _.cloneDeep(formField);
                              _formField.label = _formField.incrementLabelIndex ? `${_formField.label} ${gridItemIndex + 1}` : _formField.label;

                              return (
                                this.renderFormFields(_formField, {isDataGrid: true, gridItemKey: formLayout.key, gridItemIndex})
                              )
                            })
                          }
                        </View>
                      )
                    })
                  }
                </View>
              )
            })
          }
          <View style={styles.addOneMoreBtnContainer}>
            <Button onPress={() => this.props.addOneDataGridItem(formLayout.key, formLayout.gridItem)} style={styles.addOneMoreBtn}>
              <Image
                style={styles.addIcon}
                source={require("../../../assets/Icons/Light/Add.png")}
              />
              <Text style={styles.addOneMoreBtnTxt}>{formLayout.addOneMoreItemTxt} ({this.props.formData[formLayout.key].length})</Text>
            </Button>
          </View>
        </View>
      );
    } else if (formLayout.type === "dataGridWithFieldSets") {
      return (
        <View key={formLayout.key}>
          {
            formLayout.label ? 
            <View style={styles.headingContainer}>
              <Text style={styles.headingTxt}>{formLayout.label}</Text>
            </View> : null
          }
          <View style={[styles.addOneMoreBtnContainer, styles.addOneMoreBtnContainerWithFieldsetDG]}>
            <Button onPress={() => this.props.addOneDataGridItem(formLayout.key, formLayout.gridItem)} style={styles.addOneMoreBtn}>
              <Image
                style={styles.addIcon}
                source={require("../../../assets/Icons/Light/Add.png")}
              />
              <Text style={styles.addOneMoreBtnTxt}>{formLayout.addOneMoreItemTxt} ({this.props.formData[formLayout.key].length})</Text>
            </Button>
          </View>
          {
            this.props.formData[formLayout.key].map((gridItem, gridItemIndex) => {
              return (
                formLayout.components.map((fieldSet, fieldSetIndex) => {
                  return (
                    <View style={[styles.formLayout]} key={fieldSet.key}>
                      {
                        fieldSet.legend ? 
                        <View style={styles.headingContainer}>
                          <Text style={styles.headingTxt}>{fieldSet.legend}</Text>
                        </View> : null
                      }
                      {
                        fieldSet.components.map((formField) => {
                          return (
                            this.renderFormFields(formField, {isDataGrid: true, gridItemKey: formLayout.key, gridItemIndex})
                          )
                        })
                      }
                    </View>
                  )
                })
              )
            })
          }
        </View>
      );
    }

    return null;
  }

  continue = () => {
    this.props.saveFormToAsyncStorage();
    this.props.setStepIndex(this.props.stepIndex + 1);
  }

  saveAndExit = () => {
    this.props.saveFormToAsyncStorage();
    this.props.navigation.navigate("Stores");
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
      this.props.navigation.navigate("Stores");
    });
  }

  render() {
    const formLayouts = this.props.stepTemplate.components;
    const formViewStyles = {height: 0.7 * deviceHeight, justifyContent: "space-between"};

    return (
      <View
        style={[styles.formView, this.props.stepTemplate.fullHeight && formViewStyles]}
      >
        <View style={styles.formLayouts}>
          {
            formLayouts.map(this.renderFormLayout)
          }
        </View>

        {
          this.props.stepIndex === FIRST_INDEX ?
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
              (this.props.stepIndex !== this.props.stepsLength - 1) ?
              <Button onPress={() => this.props.setStepIndex(this.props.stepIndex + 1)} style={styles.darkBtn}>
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

                <View style={styles.modalActions}>
                  <TouchableOpacity
                    style={[styles.modalActionBtn, {backgroundColor: "transparent"}]}
                    onPress={this.toggleSubmissionConfirmationModal}>
                    <Text style={[styles.modalActionBtnTxt, {color: "rgba(233,30,99,1)"}]}>CANCEL</Text>
                  </TouchableOpacity>
                  <Button
                    style={styles.modalActionBtn}
                    onPress={this.submit}>
                    <Text style={styles.modalActionBtnTxt}>CONFIRM</Text>
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

                <View style={[styles.modalActions, {justifyContent: "center"}]}>
                  <Button
                    style={styles.modalActionBtn}
                    onPress={this.goToHomePage}>
                    <Text style={styles.modalActionBtnTxt}>BACK TO HOMEPAGE</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Modal> : null
        }
      </View>
		);
	}
}

export default FormRenderer;
