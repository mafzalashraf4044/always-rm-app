import * as React from "react";

import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";

import {
	Container,
  Button,
  CheckBox,
} from "native-base";

import styles from "./styles";
import Modal from "react-native-modal";
import { getSizeWRTDeviceWidth } from "../../../utils";


import Switch from "../Switch";
import ImageGrid from "../ImageGrid";
import { Dropdown } from "../Dropdown";

import { TextField } from "react-native-material-textfield";

const FIRST_INDEX = 0;
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export interface Props {
  form: obj;
}

export interface State {}

class FormRenderer extends React.Component<Props, State> {
  state = {submissionConfirmationModal: false, submissionSuccessModal: false};

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
          onChangeText={(value) => this.props.handleFormDataChange(formField.key, value, formLayout)}
        />
      );
    } else if (formField.type === "select") {
      return (
        <Dropdown
          key={formField.key}
          value={value}
          label={formField.label}
          data={formField.data.values}
          onChangeText={(value) => this.props.handleFormDataChange(formField.key, value, formLayout)}
        />
      );
    } else if (formField.type === "switch") {
      return (
        <View style={styles.switchContainer} key={formField.key}>
          <Text style={styles.switchTxt}>{formField.label}</Text>
          <Switch
            value={value}
            onToggle={(value) => this.props.handleFormDataChange(formField.key, value, formLayout)}
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
      return(
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
      return <View style={styles.divider} key={formField.key} />
    } else if (formField.type === "signature") {
      return (
        <View style={styles.signature} key={formField.key}>
          <Text style={styles.signatureText}>Signature Here</Text>
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
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{
                    color: "rgba(74,74,74,1)",
                    backgroundColor: "transparent",
                    fontFamily: "Always_Font",
                    fontSize: getSizeWRTDeviceWidth(12),
                    lineHeight: getSizeWRTDeviceWidth(14),
                  }}>John Doe</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
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
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
    let handleChangeData = {
      formLayoutIndex,
      formLayoutType: formLayout.type,
    };

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
                              
                              return(
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







    if (formLayout.type === "fieldset") {
      return (
        <View style={styles.formLayout} key={formLayout.key}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingTxt}>{formLayout.legend}</Text>
          </View>
          {
            formLayout.components.map((formField, formFieldIndex) => this.renderFormFields(formField, formFieldIndex, handleChangeData))
          }
        </View>
      );
    } else if (formLayout.type === "well") {
      return (
        <View style={styles.formLayout} key={formLayout.key}>
          {
            formLayout.components.map((formField, formFieldIndex) => this.renderFormFields(formField, formFieldIndex, handleChangeData))
          }
        </View>
      );
    } else if (formLayout.type === "datagrid") {
      return (
        <View style={styles.formLayout} key={formLayout.key}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingTxt}>{formLayout.label}</Text>
            <Button onPress={() => this.props.addOneDataGridItem(this.props.stepIndex, formLayoutIndex)} style={styles.addOneMoreBtn}>
              <Image
                style={styles.addIcon}
                source={require("../../../assets/Icons/Light/Add.png")}
              />
              <Text style={styles.addOneMoreBtnTxt}>{formLayout.addAnother}</Text>
            </Button>
          </View>
          {
            formLayout.components.map((table, tableIndex) => {
              if (table.type === "table") {
                return (
                  <View style={styles.table} key={tableIndex}>
                    {
                      formLayout.properties.itemTitle ?
                      <View style={[styles.headingContainer, styles.headingMarginTop]}>
                        <Text style={styles.headingTxt}>{`${formLayout.properties.itemTitle} ${tableIndex + 1}`}</Text>
                      </View> : null
                    }
                    {
                      table.rows.map((row, rowIndex) => (
                        <View style={styles.row} key={rowIndex}>
                          {
                            row.map((column, columnIndex, columns) => (
                              <View style={[styles.column, columns.length === 1 ? styles.oneColumn : styles.twoColumns]} key={columnIndex}>
                                {
                                  column.components.map(
                                    (formField, formFieldIndex) =>
                                    this.renderFormFields(formField, formFieldIndex, {...handleChangeData, tableIndex, rowIndex, columnIndex})
                                  )
                                }
                              </View>                    
                            )) 
                          }
                        </View>
                      ))
                    }
                  </View>
                )
              }

              return null;
            })
          }
        </View>
      );
    } else if (formLayout.type === "panel") {key
      const table = formLayout.components[FIRST_INDEX];

      if (table.type === "table"){ 
        return (
          <View style={styles.formLayout} key={formLayout.$$hashKey}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingTxt}>{formLayout.title}</Text>
            </View>
            <View style={styles.table} key={table.$$hashKey}>
              {
                table.rows.map((row, rowIndex) => (
                  <View style={styles.row} key={rowIndex}>
                    {
                      row.map((column, columnIndex, columns) => (
                        <View style={[styles.column, columns.length === 1 ? styles.oneColumn : styles.twoColumns]} key={columnIndex}>
                          {
                            column.components.map(
                              (formField, formFieldIndex) =>
                              this.renderFormFields(formField, formFieldIndex, {...handleChangeData, isTable: true, rowIndex, columnIndex})
                            )
                          }
                        </View>                    
                      )) 
                    }
                  </View>
                ))
              }
            </View>
          </View>
        );
      }

      return null;
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
    this.toggleSubmissionConfirmationModal();
    this.toggleSubmissionSuccessModal();
  }

  toggleSubmissionConfirmationModal = () => {
    this.setState(prevState => ({
      submissionConfirmationModal: !prevState.submissionConfirmationModal,
    }));
  }

  toggleSubmissionSuccessModal = () => {
    if (this.state.submissionSuccessModal) {
      this.props.navigation.navigate("Stores");
    }

    this.setState(prevState => ({
      submissionSuccessModal: !prevState.submissionSuccessModal,
    }));
  }

  render() {
    const formLayouts = this.props.stepTemplate.components;
    const formViewStyles = {height: 0.7 * deviceHeight, justifyContent: "space-between"};

    return (
      <View style={[styles.formView, this.props.stepTemplate.fullHeight && formViewStyles]}>
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
        </Modal>

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

							<View style={[styles.modalActions, {justifyContent: 'center'}]}>
								<Button
                  style={styles.modalActionBtn}
									onPress={this.toggleSubmissionSuccessModal}>
									<Text style={styles.modalActionBtnTxt}>BACK TO HOMEPAGE</Text>
								</Button>
							</View>
            </View>
          </View>
        </Modal>
      </View>
		);
	}
}

export default FormRenderer;
