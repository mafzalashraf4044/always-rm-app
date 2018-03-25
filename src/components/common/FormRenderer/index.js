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

  renderFormFields = (formField) => {
    if (formField.type === "textfield") {
      return (
        <TextField
          value=""
          key={formField.$$hashKey}
          label={formField.label}
          {...this.textFieldProps}
          onChangeText={undefined}
        />
      );
    } else if (formField.type === "select") {
      return (
        <Dropdown
          fullWidth={false}
          key={formField.$$hashKey}
          label={formField.label}
          data={formField.data.values}
        />
      );
    } else if (formField.type === "columns" && formField.columns.length === 2) {
      return (
        <View style={styles.twoColumns} key={formField.$$hashKey}>
          {
            formField.columns.map((column) => {
              const columnFields = column.components;
              return (
                <View style={styles.widthHalf} key={column.$$hashKey}>
                  {
                    columnFields.map(this.renderFormFields)
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

  renderFormSection = (formSection) => {
    if (formSection.type === "fieldset") {
      return (
        <View style={styles.formSection} key={formSection.$$hashKey}>
          <View style={styles.sectionHeadingContainer}>
            <Text style={styles.sectionHeadingTxt}>{formSection.legend}</Text>
          </View>
          {
            formSection.components.map(this.renderFormFields)
          }
        </View>
      );
    } else if (formSection.type === "well") {
      return (
        <View style={styles.formSection} key={formSection.$$hashKey}>
          {
            formSection.components.map(this.renderFormFields)
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
          <Button block onPress={() => this.setStepIndex(0)} style={styles.startBtn}>
            <Text style={styles.startBtnTxt}>START</Text>
          </Button>
        </View>
      </View>
		);
	}
}

export default FormRenderer;
