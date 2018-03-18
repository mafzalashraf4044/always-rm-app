import * as React from "react";
import {
	Container,
	Form,
	Button
} from "native-base";
import { getSizeWRTDeviceWidth } from '../../utils';
import Header from '../common/Header';
import ImageGrid from '../common/ImageGrid';

import { TextField } from 'react-native-material-textfield';

import { View, FlatList, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image, Text } from "react-native";
import { Dropdown } from '../common/Dropdown';
import Switch from '../common/Switch';

import styles from "./styles";

export interface Props {
  navigation: any,
}

export interface State {}
class StoreVisit extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			isStoreImgContainerVisible: true,
      steps: [
        {title: 'RSPs'},
        {title: 'Training'},
        {title: 'Merchandising'},
        {title: 'Competitor Analysis'},
        {title: 'Store Analysis'},
      ],
      stepIndex: -1,
      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,
    };
	}
  
	handleFocus = () => {
		this.setState({isStoreImgContainerVisible: false});
	}

	handleBlur = () => {
		this.setState({isStoreImgContainerVisible: true});
  }
  
  setStepIndex = (stepIndex) => {
    if ((this.state.stepIndex + 1) < 5) {
      this.setState({
        stepIndex,
      });
    }
  }

	handleChange = (key, value) => {
		this.setState({
			[key]: value
		});
	}

  getTitle = () => {
    if (this.state.stepIndex !== -1) {
      return `Step ${this.state.stepIndex + 1}: ${this.state.steps[this.state.stepIndex].title}`;
    }

    return '';
  }

  goBack = () => {
    if (this.state.stepIndex === -1) {
      this.props.navigation.goBack();
    } else {
      this.setState(prevState => ({
        stepIndex: prevState.stepIndex - 1,
      }));
    }
  }

	render() {
		const textFieldProps = {
			lineWidth:0,
			textColor:"#000",
			baseColor:"rgba(147,147,147,1)",
			tintColor:"rgba(147,147,147,1)",
			fontSize:getSizeWRTDeviceWidth(14),
			labelFontSize:getSizeWRTDeviceWidth(14) - 2,
			inputContainerStyle:{borderBottomWidth: 0.8, borderBottomColor: "#000", marginTop: getSizeWRTDeviceWidth(-15)},
		};

    return (
			<Container style={styles.storeVisit}>
				{
					this.state.isStoreImgContainerVisible && 
					<View style={styles.storeImgContainer}>
            <Image
              style={styles.backgroundImg}
              source={require("../../assets/Images/card-image.jpg")}
            />
						<Header
							title={this.getTitle()}
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
        }
        {
          this.state.stepIndex === -1 &&
          <View style={styles.startVisit}>
            <View style={styles.formSection}>
              <View style={styles.coulmns1}>
                <Dropdown
                  label='Store Status'
                  data={[{
                    value: 'Active',
                  }, {
                    value: 'Inactive',
                  }]}
                />
              </View>
              <View style={styles.coulmns1}>
                <Dropdown
                  label='Visit Number'
                  data={[{
                    value: '1',
                  }, {
                    value: '2',
                  }, {
                    value: '3',
                  }, {
                    value: '4',
                  }, {
                    value: '5',
                  }]}
                />
              </View>
            </View>
            <Button block onPress={() => this.setStepIndex(0)} style={styles.startBtn}>
              <Text style={styles.startBtnTxt}>START</Text>
            </Button>
          </View>
        }

        {
          this.state.stepIndex === 0 &&
          <ScrollView endFillColor="#fff" style={styles.scrollView}>
            <View style={styles.formView}>
              <View style={styles.formSection}>
                <View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="Current RSPs in stores"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
                </View>
                <View style={styles.currentRSPList}>
                  <View style={styles.RSPListHeader}>
                    <Text style={styles.RSPListTitle}>Current RSP List</Text>
                    <Button onPress={() => {}} style={styles.addRSPBtn}>
                      <Image
                        style={styles.addIcon}
                        source={require("../../assets/Icons/Light/Add.png")}
                      />
                      <Text style={styles.addRSPBtnTxt}>ADD NEW RSP (1)</Text>
                    </Button>
                  </View>
                  <FlatList
                    data={[
                      {id: 0, name: 'John Doe', email: 'johndoe.always@gmail.com'},
                      {id: 1, name: 'John Doe', email: 'johndoe.always@gmail.com'},
                      {id: 2, name: 'John Doe', email: 'johndoe.always@gmail.com'},
                      {id: 3, name: 'John Doe', email: 'johndoe.always@gmail.com'},
                      {id: 4, name: 'John Doe', email: 'johndoe.always@gmail.com'},
                      {id: 5, name: 'John Doe', email: 'johndoe.always@gmail.com'},
                    ]}
                    renderItem={
                      ({item}) => (
                        <View style={styles.RSTListItem}>
                          <Text style={styles.RSTListItemTxt}>{item.name}</Text>
                          <Text style={styles.RSTListItemTxt}>{item.email}</Text>
                        </View>
                      )
                    }
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>
							<View style={styles.formSection}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>New RSP 1</Text>
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="Name"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="Email"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <Dropdown
                    label='IRRP Registered'
                    data={[{
                      value: 'Yes',
                    }, {
                      value: 'No',
                    }]}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="Courses Completed"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
							</View>

              <View style={styles.formActions}>
                <Button onPress={() => this.props.navigation.navigate("Stores")} style={styles.lightBtn}>
                  <Text style={styles.lightBtnTxt}>SAVE & EXIT</Text>
                </Button>
                <Button onPress={() => this.setStepIndex(this.state.stepIndex + 1)} style={styles.darkBtn}>
                  <Text style={styles.darkBtnTxt}>CONTINUE</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        }

        {
          this.state.stepIndex === 1 &&
          <ScrollView endFillColor="#fff" style={styles.scrollView}>
            <View style={styles.formView}>
							<View style={styles.formSection}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>Training Attendance</Text>
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="Total Attendees in Training"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="IREP Courses in Store"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
							</View>
							<View style={styles.formSection}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>Training Course</Text>
								</View>
                {
                  [1, 2, 3, 4, 5].map((course) => (
                    <View style={styles.coulmns2} key={course}>
                      <View style={styles.widthHalf}>
                        <Dropdown
                          label={`Training Course ${course}`}
                          data={[{
                            value: 'Optane',
                          }, {
                            value: '10th Gen',
                          }, {
                            value: 'Competitor Analysis',
                          }, {
                            value: 'Some Other Course',
                          }]}
                        />
                      </View>
                      <View style={styles.widthHalf}>
                        <TextField
                          value=""
                          label="IREP Courses in Store"
                          {...textFieldProps}
                          onChangeText={undefined}
                        />
                      </View>
                    </View>
                  ))
                }
                <Button onPress={() => {}} style={styles.addCourseBtn}>
                  <Image
                    style={styles.addIcon}
                    source={require("../../assets/Icons/Light/Add.png")}
                  />
                  <Text style={styles.addCourseBtnTxt}>ADD COURSE</Text>
                </Button>
							</View>
							<View style={styles.formSection}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>Training Activites</Text>
								</View>
                <ImageGrid isAddEnabled images={[
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                ]}/>
              </View>

              <View style={styles.formActions}>
                <Button onPress={() => this.props.navigation.navigate("Stores")} style={styles.lightBtn}>
                  <Text style={styles.lightBtnTxt}>SAVE & EXIT</Text>
                </Button>
                <Button onPress={() => this.setStepIndex(this.state.stepIndex + 1)} style={styles.darkBtn}>
                  <Text style={styles.darkBtnTxt}>CONTINUE</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        }

        {
          this.state.stepIndex === 2 &&
          <ScrollView endFillColor="#fff" style={styles.scrollView}>
            <View style={styles.formView}>
							<View style={styles.formSection}>
								<View style={styles.switchContainer}>
									<Text style={styles.switchTxt}>IPOS/RXT Installation</Text>
                  <Switch
                    value={this.state.switch1}
                    onToggle={() => {
                      this.setState(prevState => ({
                        switch1: !prevState.switch1,
                      }))
                    }}
                  />
								</View>
                <Text style={styles.merchInfoTxt}>Merchandiser Information</Text>
							</View>
							<View style={styles.formSection}>
                <View style={styles.switchContainer}>
									<Text style={styles.switchTxt}>2-in-1 PCs (9)</Text>
                  <Switch
                    value={this.state.switch2}
                    onToggle={(switch2) => {
                      this.setState({
                        switch2,
                      })
                    }}
                  />
								</View>
                <ImageGrid isAddEnabled={false} images={[
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                ]}/>
								<View style={styles.coulmns1}>
                  <TextField
                    multiline
                    label="IREP Courses in Store"
                    {...textFieldProps}
                    onChangeText={undefined}
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                  />
								</View>
              </View>
							<View style={styles.formSection}>
                <View style={styles.switchContainer}>
									<Text style={styles.switchTxt}>Laptops (9)</Text>
                  <Switch
                    value={this.state.switch3}
                    onToggle={(switch3) => {
                      this.setState({
                        switch3,
                      })
                    }}
                  />
								</View>
                <ImageGrid isAddEnabled={false} images={[
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                ]}/>
								<View style={styles.coulmns1}>
                  <TextField
                    multiline
                    label="IREP Courses in Store"
                    {...textFieldProps}
                    onChangeText={undefined}
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                  />
								</View>
              </View>
							<View style={styles.formSection}>
                <View style={styles.switchContainer}>
									<Text style={styles.switchTxt}>ALL-in-1 PCs (3)</Text>
                  <Switch
                    value={this.state.switch4}
                    onToggle={(switch4) => {
                      this.setState({
                        switch4,
                      })
                    }}
                  />
								</View>
                <ImageGrid isAddEnabled={false} images={[
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                ]}/>
								<View style={styles.coulmns1}>
                  <TextField
                    multiline
                    label="IREP Courses in Store"
                    {...textFieldProps}
                    onChangeText={undefined}
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                  />
								</View>
              </View>
              <View style={styles.formActions}>
                <Button onPress={() => this.props.navigation.navigate("Stores")} style={styles.lightBtn}>
                  <Text style={styles.lightBtnTxt}>SAVE & EXIT</Text>
                </Button>
                <Button onPress={() => this.setStepIndex(this.state.stepIndex + 1)} style={styles.darkBtn}>
                  <Text style={styles.darkBtnTxt}>CONTINUE</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        }

        {
          this.state.stepIndex === 3 &&
          <ScrollView endFillColor="#fff" style={styles.scrollView}>
            <View style={styles.formView}>
              <View style={styles.formSection}>
                <View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>Competitor Analysis</Text>
								</View>
                <Button onPress={() => {}} style={styles.addCompetitorBtn}>
                  <Image
                    style={styles.addIcon}
                    source={require("../../assets/Icons/Light/Add.png")}
                  />
                  <Text style={styles.addCompetitorBtnTxt}>ADD COMPETITOR (1)</Text>
                </Button>
              </View>
              <View style={styles.formSection}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>Competitor Information</Text>
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="Competitor Name"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <Dropdown
                    label="POSM Installed"
                    data={[{
                      value: 'Yes',
                    }, {
                      value: 'No',
                    }]}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="Description"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="PC Brand"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="PC Description"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
							</View>
							<View style={styles.formSection}>
                <View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>Competitor Images</Text>
								</View>
                <ImageGrid isAddEnabled images={[
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                ]}/>
              </View>

              <View style={styles.formActions}>
                <Button onPress={() => this.props.navigation.navigate("Stores")} style={styles.lightBtn}>
                  <Text style={styles.lightBtnTxt}>SAVE & EXIT</Text>
                </Button>
                <Button onPress={() => this.setStepIndex(this.state.stepIndex + 1)} style={styles.darkBtn}>
                  <Text style={styles.darkBtnTxt}>CONTINUE</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        }

        {
          this.state.stepIndex === 4 &&
          <ScrollView endFillColor="#fff" style={styles.scrollView}>
            <View style={styles.formView}>
              <View style={styles.formSection}>
                <View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>2-in-1 Zone</Text>
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="Current"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="Outdated"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    value=""
                    label="Refresh/Deployment Opportunity"
                    {...textFieldProps}
                    onChangeText={undefined}
                  />
								</View>
								<View style={styles.coulmns1}>
                  <TextField
                    multiline
                    label="Description"
                    {...textFieldProps}
                    onChangeText={undefined}
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                  />
								</View>
              </View>
							<View style={styles.formSection}>
                <View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>PC Images (minimum 5 images)</Text>
								</View>
                <ImageGrid isAddEnabled images={[
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                ]}/>
              </View>

              <View style={styles.formActions}>
                <Button onPress={() => this.props.navigation.navigate("Stores")} style={styles.lightBtn}>
                  <Text style={styles.lightBtnTxt}>SAVE & EXIT</Text>
                </Button>
                <Button onPress={() => this.setStepIndex(this.state.stepIndex + 1)} style={styles.darkBtn}>
                  <Text style={styles.darkBtnTxt}>CONTINUE</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        }
			</Container>
		);
	}
}

export default StoreVisit;
