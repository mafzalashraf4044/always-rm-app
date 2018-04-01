import * as React from "react";

import {
  View,
} from "react-native";

import {
  Spinner,
} from "native-base";

import { connect } from "react-redux";

import styles from "./styles";

export interface Props {
  navigation: any;
}

export interface State {}

class LoaderContainer extends React.Component<Props, State> {
  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.loader}>
          <Spinner color="#000" />
        </View>
      );
    }

    return null;
	}
}

const mapStateToProps = state => ({
	isLoading: state.reducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoaderContainer);

