import * as React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import moment from "moment";

import Modal from "react-native-modal";
import { Button } from "native-base";
import DatePicker from "react-native-datepicker";
import { TextField } from "react-native-material-textfield";

import Switch from "../Switch";
import ImageGrid from "../ImageGrid";
import { Dropdown } from "../Dropdown";
import SignaturePad from "../SignaturePad";

import styles from "./styles";
import { getSizeWRTDeviceWidth, deviceHeight } from "../../../utils";

export interface Props {
  form: obj;
}

export interface State {}

class FormRenderer extends React.Component<Props, State> {
  state = {submissionConfirmationModal: false, submissionSuccessModal: false, rspListItemEditIndex: -1, selectedRspListItem: null};

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

  isUpdateRspListEnabled = () => {
    let _isUpdateRspListEnabled = true;

    this.props.formData.newRspItems.forEach((rspItem) => {
      if (!rspItem.name || !rspItem.email || !rspItem.contactNumber || !rspItem.irepTrainedUser || !rspItem.status) {
        _isUpdateRspListEnabled = false;
      }
    });

    return _isUpdateRspListEnabled;
  }

  renderFormFields = (formField, formLayout = null) => {
    let value = "";

    if (!formLayout) {
      value = this.props.formData[formField.key];
    } else if (formLayout.gridItemKey) {
      value = this.props.formData[formLayout.gridItemKey][formLayout.gridItemIndex][formField.key];
    }

    if (value === undefined) return null;
          
    if (formField.type === "textfield" || formField.type === "number") {
      return (
        <TextField
          key={formField.key}
          value={value.toString()}
          label={formField.label}
          {...this.textFieldProps}
          editable={!this.props.disableEditing && formField.editable}
          multiline={formField.multiline}
          keyboardType={formField.keyboardType || "default"}
          onChangeText={(_value) => this.props.handleFormDataChange(formField.key, _value, formLayout, formField.aggregate)}
        />
      );
    } else if (formField.type === "select") {
      return (
        <Dropdown
          fullWidth
          value={value}
          key={formField.key}
          label={formField.label}
          data={formField.data.values}
          isDisabled={this.props.disableEditing}
          onChangeText={(_value) => this.props.handleFormDataChange(formField.key, _value, formLayout)}
        />
      );
    } else if (formField.type === "date") {
      return (
        <View key={formField.key} style={{borderBottomWidth: 0.8, borderBottomColor: "#000", marginTop: getSizeWRTDeviceWidth(10), marginBottom: getSizeWRTDeviceWidth(10)}}>
          <DatePicker
            style={{width: "100%"}}
            date={value}
            mode="date"
            placeholder={formField.label}
            format="YYYY-MM-DD"
            minDate="1999-01-01"
            maxDate="2050-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            androidMode="spinner"
            showIcon={false}
            disabled={this.props.disableEditing}
            customStyles={{
              dateInput: {
                borderWidth: 0,
              },
              dateText: {
                color: "#000",
                width: "100%",
                textAlign: "left",
                fontSize: getSizeWRTDeviceWidth(14),
                marginBottom: getSizeWRTDeviceWidth(-10)
              },
              placeholderText: {
                width: "100%",
                textAlign: "left",
                color: "rgba(147,147,147,1)",
                fontSize: getSizeWRTDeviceWidth(14),
                marginBottom: getSizeWRTDeviceWidth(-10)
              },
              disabled: {
                backgroundColor: "#FFF",
              }
            }}
            onDateChange={(date) => this.props.handleFormDataChange(formField.key, date, formLayout)}
          />
        </View>
      );
    } else if (formField.type === "switch") {
      return (
        <View style={styles.switchContainer} key={formField.key}>
          <Text style={styles.switchTxt}>{formField.label}</Text>
          <Switch
            value={value}
            disabled={this.props.disableEditing}
            onToggle={(_value) => this.props.handleFormDataChange(formField.key, _value, formLayout)}
          />
        </View>
      );
    } else if (formField.type === "image") {
      return (
        <ImageGrid
          isAddEnabled={formField.isAddEnabled && !this.props.disableEditing}
          images={value}
          key={formField.key}
          uniqueKey={formField.key}
          navigation={this.props.navigation}
          addEnabledDependency={this.props.formData[formField.addEnabledDependency]}
          saveCapturedImg={(image) => this.props.saveCapturedImg(formField.key, image, formLayout)}
        />
      );
    } else if (formField.type === "divider") {
      return <View style={styles.divider} key={formField.key} />;
    } else if (formField.type === "signature" && !this.props.disableEditing) {
      return (
        <View style={styles.signatureContainer} key={formField.key}>
          <View style={styles.signatureTxtContainer}>
            <Text style={styles.signatureTxt}>Signature</Text>
          </View>
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
                onError={() => {}}
                onChange={({base64DataUrl}) => this.props.signaturePadChange(base64DataUrl, formField, formLayout)}
                style={{flex: 1, backgroundColor: "white"}}
              />
            }
            {
              value ?
              <Button onPress={() => this.props.handleFormDataChange(formField.key, "", formLayout)} style={styles.clearSignatureBtn}>
                <Image
                  style={styles.clearSignatureIcon}
                  source={require("../../../assets/Icons/Light/Delete.png")}
                />
              </Button> : null
            }
          </View>
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
      //  only for RCR step # 2 Face-to-Face Training
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

                              const value = this.props.formData[formLayout.key][gridItemIndex][formField.key];

                              if (formField.key === "trainingCourse") {
                                if (value === "" || value === "optane" || value === "irep") {
                                  return (
                                    <Dropdown
                                      value={value}
                                      key={formField.key}
                                      label={formField.label}
                                      data={formField.data.values}
                                      isDisabled={this.props.disableEditing}
                                      onChangeText={(_value) => this.props.handleFormDataChange(formField.key, _value, {isDataGrid: true, gridItemKey: formLayout.key, gridItemIndex})}
                                    />
                                  );
                                } else {
                                  return (
                                    <TextField
                                      key={formField.key}
                                      value={value === "Others" ? "" : value}
                                      label={formField.label}
                                      {...this.textFieldProps}
                                      onChangeText={(_value) => this.props.handleFormDataChange(formField.key, _value, {isDataGrid: true, gridItemKey: formLayout.key, gridItemIndex})}
                                    />
                                  );
                                }
                              } else if (formField.key === "trainingDone") {
                                return (
                                  <View style={styles.checkboxContainer} key={formField.key}>
                                    <Text style={styles.checkboxTxt}>{formField.label}</Text>
                                    <TouchableOpacity disabled={this.props.disableEditing} style={styles.checkbox} onPress={() => this.props.handleFormDataChange(formField.key, !value, {isDataGrid: true, gridItemKey: formLayout.key, gridItemIndex})}>
                                      {
                                        value ?
                                        <View style={styles.checked}/> : null
                                      }
                                    </TouchableOpacity>
                                  </View>
                                );
                              }
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

         {
            !this.props.disableEditing ?
            <View style={styles.addOneMoreBtnContainer}>
              <Button onPress={() => this.props.addOneDataGridItem(formLayout.key, formLayout.gridItem)} style={styles.addOneMoreBtn}>
                <Image
                  style={styles.addIcon}
                  source={require("../../../assets/Icons/Light/Add.png")}
                />
                <Text style={styles.addOneMoreBtnTxt}>{formLayout.addOneMoreItemTxt} ({this.props.formData[formLayout.key].length})</Text>
              </Button>
            </View> : null
          }

        </View>
      );
    } else if (formLayout.type === "dataGridWithFieldSets") {

      const addOneMoreBtn = () => (
        !this.props.disableEditing ?
        <View
          style={[
            styles.addOneMoreBtnContainer,
            formLayout.addOneMoreItemPosition === "top" && styles.addOneMoreBtnContainerWithFieldsetDGFS,
            formLayout.addOneMoreItemPosition === "bottom" && styles.addOneMoreBtnContainerWithFieldsetDGFE,
          ]}
        >
          <Button onPress={() => this.props.addOneDataGridItem(formLayout.key, formLayout.gridItem)} style={styles.addOneMoreBtn}>
            <Image
              style={styles.addIcon}
              source={require("../../../assets/Icons/Light/Add.png")}
            />
            <Text style={styles.addOneMoreBtnTxt}>{formLayout.addOneMoreItemTxt}</Text>
          </Button>
        </View> : null
      );

      return (
        <View key={formLayout.key}>
          {
            formLayout.label ?
            <View style={styles.headingContainer}>
              <Text style={styles.headingTxt}>{formLayout.label}</Text>
            </View> : null
          }

          {
            formLayout.addOneMoreItemPosition === "top" ? addOneMoreBtn() : null
          }

          {
            this.props.formData[formLayout.key].map((gridItem, gridItemIndex) => {
              return (
                formLayout.components.map((fieldSet, fieldSetIndex) => {
                  return (
                    <View style={[styles.formLayout]} key={fieldSet.key}>
                      {
                        fieldSet.legend ?
                        <View style={[styles.headingContainer, this.props.disableEditing && {marginTop: getSizeWRTDeviceWidth(25)}]}>
                          <Text style={[styles.headingTxt, fieldSet.legendDarkTxt && {color: "rgba(74,74,74,1)", fontWeight: "bold"}]}>{fieldSet.legend} ({gridItemIndex + 1})</Text>
                        </View> : null
                      }
                      {
                        fieldSet.components.map((formField) => {
                          return (
                            this.renderFormFields(formField, {isDataGrid: true, gridItemKey: formLayout.key, gridItemIndex})
                          );
                        })
                      }
                    </View>
                  );
                })
              );
            })
          }

          {
            formLayout.addOneMoreItemPosition === "bottom" ? addOneMoreBtn() : null
          }
        </View>
      );
    } else if (formLayout.type === "rspList" && this.props.formData.rspList && !(this.props.disableEditing && this.props.formData.rspList.length === 0)) {
      //  only for RCR step # 1 RSP List
      return (
        <View style={styles.formLayout} key={formLayout.key}>
          <View style={styles.rspListHeadingContainer}>
            <Text style={styles.headingTxt}>{formLayout.label}</Text>
            {
              !this.props.disableEditing ?
              <Button onPress={() => this.props.addOneDataGridItem("newRspItems", formLayout.gridItem)} style={styles.addOneMoreBtn}>
                <Image
                  style={styles.addIcon}
                  source={require("../../../assets/Icons/Light/Add.png")}
                />
                <Text style={styles.addOneMoreBtnTxt}>{formLayout.addOneMoreItemTxt} ({this.props.formData[formLayout.key].length})</Text>
              </Button> : null
            }
          </View>

          <View style={styles.rspList}>
            {
              this.props.formData.rspList.map((gridItem, gridItemIndex) => {
                if (gridItem.status === "Active") {
                  return (
                    <View style={styles.rspListItem} key={gridItemIndex}>
                      <View style={styles.rspListItemName}>
                        <Text style={styles.rspListItemNameTxt}>{gridItem.name}</Text>
                      </View>
                      <View style={styles.rspListItemContactInfo}>
                        <Text style={styles.rspListItemEmailTxt}>{gridItem.email}</Text>
                        <Text style={styles.rspListItemContactNoTxt}>{gridItem.contactNumber}</Text>
                      </View>
                      <View style={styles.rspListItemEditBtnContainer}>
                        <Button disabled={this.props.disableEditing} onPress={() => this.setRspListItemEditIndex(gridItemIndex)} style={[styles.rspListItemEditBtn, this.props.disableEditing && styles.btnDisabled]}>
                          <Text style={styles.rspListItemEditBtnTxt}>EDIT</Text>
                        </Button>
                      </View>
                    </View>
                  );
                }

                return null;
              })
            }
          </View>

          {
            this.props.formData.newRspItems.length ?
            <View>
              <View style={[styles.divider, {marginVertical: getSizeWRTDeviceWidth(25)}]} />

              {
                this.props.formData.newRspItems.map((gridItem, gridItemIndex) => {
                  return (
                    formLayout.components.map((fieldSet, fieldSetIndex) => {
                      return (
                        <View style={[styles.formLayout]} key={fieldSet.key}>
                          {
                            fieldSet.legend ? 
                            <View style={styles.headingContainer}>
                              <Text style={[styles.headingTxt]}>{fieldSet.legend} {gridItemIndex + 1}</Text>
                            </View> : null
                          }
                          {
                            fieldSet.components.map((formField) => {
                              return (
                                this.renderFormFields(formField, {isDataGrid: true, gridItemKey: "newRspItems", gridItemIndex})
                              );
                            })
                          }
                        </View>
                      );
                    })
                  );
                })
              }

              <Button disabled={!this.isUpdateRspListEnabled()} onPress={this.props.appendNewRspToList} style={[styles.updateRspListBtn, !this.isUpdateRspListEnabled() && styles.btnDisabled]}>
                <Text style={styles.updateRspListBtnTxt}>Update Current RSP List</Text>
              </Button>              
            </View> : null
          }

          {
            this.state.rspListItemEditIndex !== -1 ?
            <Modal
              style={styles.modalContainer}
              isVisible={this.state.rspListItemEditIndex !== -1}
            >
              <View style={styles.modal}>
                <ScrollView
                  endFillColor="#fff"
                >
                  <View style={styles.header}>
                    <Text style={styles.headerTxt}>EDIT RSP</Text>
                  </View>
                  <View style={styles.body}>
                    {
                      formLayout.components.map((fieldSet, fieldSetIndex) => {
                        return (
                          <View style={[styles.formLayout]} key={fieldSet.key}>
                            {
                              fieldSet.components.map((formField) => {
                                return (
                                  this.renderFormFields(formField, {isDataGrid: true, gridItemKey: formLayout.key, gridItemIndex: this.state.rspListItemEditIndex})
                                );
                              })
                            }
                          </View>
                        );
                      })
                    }

                    <View style={styles.formActions}>
                      <Button
                        onPress={() => this.setRspListItemEditIndex(-1, true)}
                        style={[styles.lightBtn, {width: getSizeWRTDeviceWidth(80)}]}
                      >
                        <Text style={styles.lightBtnTxt}>CANCEL</Text>
                      </Button>
                      <Button
                        onPress={() => this.setRspListItemEditIndex(-1)}
                        style={[styles.darkBtn, {width: getSizeWRTDeviceWidth(80)}]}
                      >
                        <Text style={styles.darkBtnTxt}>SAVE</Text>
                      </Button>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </Modal> : null
          }
        </View>
      );
    }

    return null;
  }

  setRspListItemEditIndex = (rspListItemEditIndex, isCancel = false) => {
    const _rspListItemEditIndex = this.state.rspListItemEditIndex;
    this.setState({
      rspListItemEditIndex,
    }, () => {
      //  on cancel
      if (isCancel) {
        for (const key in this.state.selectedRspListItem) {
          this.props.handleFormDataChange(key, this.state.selectedRspListItem[key], {isDataGrid: true, gridItemKey: "rspList", gridItemIndex: _rspListItemEditIndex});
        }

        this.setState({selectedRspListItem: null});
      } else if (this.state.rspListItemEditIndex !== -1){
        this.setState({selectedRspListItem: {...this.props.formData.rspList[rspListItemEditIndex]}});
      }
    });
  }

  continue = () => {
    // this.props.saveFormToAsyncStorage();
    this.props.setStepIndex(this.props.stepIndex + 1);
  }

  saveAndExit = () => {
    this.props.saveFormToAsyncStorage();
    this.props.navigation.navigate("MyStores");
  }

  submit = () => {
    this.props.saveFormToAsyncStorage(true);

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
      this.props.navigation.navigate("MyStores");
    });
  }

  renderFormActions = () => {
    if (this.props.disableEditing) {
      return (
        this.props.stepTemplate.startBtn ?
        <View style={styles.formActions}>
          <Button block onPress={() => this.props.setStepIndex(this.props.stepIndex + 1)} style={styles.startBtn}>
            <Text style={styles.startBtnTxt}>NEXT</Text>
          </Button>
        </View> :
        <View style={styles.formActions}>
          <Button onPress={() => this.props.navigation.navigate("MyStores")}  style={styles.lightBtn}>
            <Text style={styles.lightBtnTxt}>EXIT</Text>
          </Button>
          {
            (this.props.stepIndex !== this.props.stepsLength - 1) ?
            <Button onPress={() => this.props.setStepIndex(this.props.stepIndex + 1)} style={styles.darkBtn}>
              <Text style={styles.darkBtnTxt}>Next</Text>
            </Button> : null
          }
        </View>
      );
    }

    return (
      this.props.stepTemplate.startBtn ?
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
    );
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

        {this.renderFormActions()}

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
                <Text style={styles.bodyTxt}>You are submitting data reports for {this.props.store.name} on {moment().format("YYYY-MM-DD")} at {moment().format("HH:mm A")}</Text>

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
              <Text style={styles.bodyTxt}>You have successfully submitted data reports for {this.props.store.name} on {moment().format("YYYY-MM-DD")} at {moment().format("HH:mm A")}</Text>

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
		);
	}
}

export default FormRenderer;
