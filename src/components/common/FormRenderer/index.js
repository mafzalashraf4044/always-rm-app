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

  renderFormFields = (formField, formFieldIndex, formSectionIndex, columnField = null) => {
    if (formField.type === "textfield" || formField.type === "number") {
      return (
        <TextField
          key={formField.$$hashKey || formField.key}
          value={formField.defaultValue}
          label={formField.label}
          {...this.textFieldProps}
          onChangeText={(value) => this.props.onChange(value, this.props.stepIndex, formFieldIndex, formSectionIndex, columnField)}
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
          onChangeText={(value) => this.props.onChange(value, this.props.stepIndex, formFieldIndex, formSectionIndex, columnField)}
        />
      );
    } else if (formField.type === "checkbox") {
      return (
        <View style={styles.switchContainer} key={formField.$$hashKey || formField.key}>
          <Text style={styles.switchTxt}>{formField.label}</Text>
          <Switch
            value={formField.defaultValue}
            onToggle={(value) => this.props.onChange(value, this.props.stepIndex, formFieldIndex, formSectionIndex, columnField)}
          />
        </View>
      );
    } else if (formField.type === "htmlelement") {
      return(
        <Text style={styles.htmlElementTxt} key={formField.$$hashKey || formField.key}>{formField.label}</Text>
      )
    } else if (formField.type === "columns" && formField.columns.length === 2) {
      return (
        <View style={styles.twoColumns} key={formField.$$hashKey || formField.key}>
          {
            formField.columns.map((column, columnIndex) => {
              const columnFields = column.components;
              return (
                <View style={styles.widthHalf} key={column.$$hashKey}>
                  {
                    columnFields.map((columnField, columnFieldIndex) => this.renderFormFields(columnField, formFieldIndex, formSectionIndex, {
                      columnIndex,
                      columnField,
                      columnFieldIndex,
                    }))
                  }
                </View>
              )
            })
          }
        </View>
      );
    }

    return null;
  }

  renderFormSection = (formSection, formSectionIndex) => {
    if (formSection.type === "fieldset") {
      return (
        <View style={styles.formSection} key={formSection.$$hashKey}>
          <View style={styles.sectionHeadingContainer}>
            <Text style={styles.sectionHeadingTxt}>{formSection.legend}</Text>
          </View>
          {
            formSection.components.map((formField, formFieldIndex) => this.renderFormFields(formField, formFieldIndex, formSectionIndex))
          }
        </View>
      );
    } else if (formSection.type === "well") {
      return (
        <View style={styles.formSection} key={formSection.$$hashKey}>
          {
            formSection.components.map((formField, formFieldIndex) => this.renderFormFields(formField, formFieldIndex, formSectionIndex))
          }
        </View>
      );
    }

    return null;
  }

  render() {
    const formSections = this.props.form.components;
    
    return (
      <View style={styles.formView}>
        {
          formSections.map(this.renderFormSection)
        }

        <View style={styles.formActions}>
          <Button block onPress={() => this.props.setStepIndex(this.props.stepIndex + 1)} style={styles.startBtn}>
            <Text style={styles.startBtnTxt}>START</Text>
          </Button>
        </View>
      </View>
		);
	}
}

export default FormRenderer;
