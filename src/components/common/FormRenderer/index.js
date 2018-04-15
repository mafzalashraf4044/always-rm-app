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
import { getSizeWRTDeviceWidth } from "../../../utils";


import Switch from "../Switch";
import ImageGrid from "../ImageGrid";
import { Dropdown } from "../Dropdown";

import { TextField } from "react-native-material-textfield";

const FIRST_INDEX = 0;
const deviceWidth = Dimensions.get("window").width;

export interface Props {
  form: obj;
}

export interface State {}

class FormRenderer extends React.Component<Props, State> {

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
          saveCapturedImg={(image) => this.props.saveCapturedImg(formField.key, image)}
        />
      );
    } else if (formField.type === "divider") {
      return <View style={styles.divider} key={formField.key} />
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
        <View style={[styles.formLayout, formLayout.styles ? formLayout.styles : null]} key={formLayout.key}>
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
                                this.renderFormFields(_formField, {gridItemKey: formLayout.key, gridItemIndex})
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
              <Text style={styles.addOneMoreBtnTxt}>{formLayout.addOneMoreItemTxt}</Text>
            </Button>
          </View>
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

  render() {
    const formLayouts = this.props.formTemplate.components;
    
    return (
      <View style={styles.formView}>
        {
          formLayouts.map(this.renderFormLayout)
        }

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
              </Button> : null
            }
          </View>
        }
      </View>
		);
	}
}

export default FormRenderer;
