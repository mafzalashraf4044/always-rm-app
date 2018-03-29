import * as React from "react";

import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";

import {
	Container,
	Button
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
    labelFontSize:getSizeWRTDeviceWidth(14) - 2,
    inputContainerStyle:{borderBottomWidth: 0.8, borderBottomColor: "#000", marginTop: getSizeWRTDeviceWidth(-15)},
  };

  renderFormFields = (formField, formFieldIndex, handleChangeData) => {
    if (formField.type === "textfield" || formField.type === "number") {
      return (
        <TextField
          key={formField.$$hashKey || formField.key}
          value={formField.defaultValue}
          label={formField.label}
          {...this.textFieldProps}
          onChangeText={(value) => this.props.onChange(value, this.props.stepIndex, formFieldIndex, handleChangeData)}
        />
      );
    } else if (formField.type === "select") {
      return (
        <Dropdown
          fullWidth={false}
          key={formField.$$hashKey || formField.key}
          label={formField.label}
          value={formField.defaultValue}
          data={formField.data.values}
          onChangeText={(value) => this.props.onChange(value, this.props.stepIndex, formFieldIndex, handleChangeData)}
        />
      );
    } else if (formField.type === "checkbox") {
      return (
        <View style={styles.switchContainer} key={formField.$$hashKey || formField.key}>
          <Text style={styles.switchTxt}>{formField.label}</Text>
          <Switch
            value={formField.defaultValue}
            onToggle={(value) => this.props.onChange(value, this.props.stepIndex, formFieldIndex, handleChangeData)}
          />
        </View>
      );
    } else if (formField.type === "htmlelement") {
      return(
        <Text style={styles.htmlElementTxt} key={formField.$$hashKey || formField.key}>{formField.label}</Text>
      )
    }

    return null;
  }

  renderFormLayout = (formLayout, formLayoutIndex) => {
    let handleChangeData = {
      formLayoutIndex,
      formLayoutType: formLayout.type,
    };
    if (formLayout.type === "fieldset") {
      return (
        <View style={styles.formLayout} key={formLayout.$$hashKey}>
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
        <View style={styles.formLayout} key={formLayout.$$hashKey}>
          {
            formLayout.components.map((formField, formFieldIndex) => this.renderFormFields(formField, formFieldIndex, handleChangeData))
          }
        </View>
      );
    } else if (formLayout.type === "datagrid") {
      return (
        <View style={styles.formLayout} key={formLayout.$$hashKey}>
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
    }

    return null;
  }

  render() {
    const formLayouts = this.props.form.components;
    
    return (
      <View style={styles.formView}>
        {
          formLayouts.map(this.renderFormLayout)
        }

        {
          this.props.stepIndex === FIRST_INDEX ?
          <View style={styles.formActions}>
            <Button block onPress={() => this.props.setStepIndex(this.props.stepIndex + 1)} style={styles.startBtn}>
              <Text style={styles.startBtnTxt}>START</Text>
            </Button>
          </View> :
          <View style={styles.formActions}>
            <Button onPress={() => this.props.navigation.navigate("Stores")} style={styles.lightBtn}>
              <Text style={styles.lightBtnTxt}>SAVE & EXIT</Text>
            </Button>
            <Button onPress={() => this.props.setStepIndex(this.state.stepIndex + 1)} style={styles.darkBtn}>
              <Text style={styles.darkBtnTxt}>CONTINUE</Text>
            </Button>
          </View>
        }


      </View>
		);
	}
}

export default FormRenderer;
