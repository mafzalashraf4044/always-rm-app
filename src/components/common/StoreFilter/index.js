import React from "react";

import {
  Animated,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";

import styles from "./styles";

export interface Props {
  toggleScrollEnabled: func,
}

class StoreFilter extends React.Component<Props> {

  constructor(props) {
    super(props);

    this.listItems = [
      {label: "Last 14 days", value: 14},
      {label: "Last 21 days", value: 21},
      {label: "Last 28 days", value: 28},
    ];

    this.state = {
      isCollapsableOpen: false,
      collapsableAnimation: new Animated.Value(),
      maxHeight: null,
      filterValueIndex: 0,
    };
  }

  toggleCollapsable = () => {
    const animateTo = this.state.isCollapsableOpen ? 0 : this.state.maxHeight;

    this.setState(prevState => ({
      isCollapsableOpen: !prevState.isCollapsableOpen,
    }), () => {
      this.props.toggleScrollEnabled();
    });

    Animated.timing(
      this.state.collapsableAnimation,
      {toValue: animateTo, duration: 500}
    ).start();
  }

  setMaxHeight = (event) => {
    if (this.state.maxHeight === null) {
      this.setState({
          maxHeight: event.nativeEvent.layout.height,
      }, () => {
        this.state.collapsableAnimation.setValue(0);
      });
    }
  }

	renderItem = ({item}) => {
		return (
      <TouchableOpacity onPress={() => {}} style={styles.listItem}>
				<Text style={styles.listItemTxt}>
					{item.label}
				</Text>
      </TouchableOpacity>
		);
	}

  render() {
    return (
      <View style={styles.storeFilter}>
        <TouchableOpacity onPress={this.toggleCollapsable}>
          <View style={styles.storeFilterSelected}>
            <Text style={styles.storeFilterSelectedTxt}>
              {`Filter: ${this.listItems[this.state.filterValueIndex].label}`}
            </Text>
            <Image
              style={styles.dropdownIcon}
              source={require("../../../assets/Icons/Dark/SortDown.png")}
            />
          </View>
        </TouchableOpacity>
        <Animated.View style={{height: this.state.collapsableAnimation, overflow: "hidden"}}>
          <View onLayout={this.setMaxHeight} style={styles.collapsable}>
            <FlatList
              data={this.listItems}
              renderItem={this.renderItem}
              keyExtractor={item => item.label}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default StoreFilter;
