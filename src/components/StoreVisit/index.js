import * as React from "react";
import {
	Container,
	Item,
	Input,
	Form,
	Label,
	Button
} from "native-base";
import { getSizeWRTDeviceWidth } from '../../utils';
import Header from '../common/Header';
import ImageGrid from '../common/ImageGrid';

import { View, FlatList, Switch, ScrollView, TouchableOpacity, Image, Text } from "react-native";

import styles from "./styles";

export interface Props {
	loginForm: any,
	onLogin: Function,
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
		const labelStyle = {fontSize: getSizeWRTDeviceWidth(12)};

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
                <View style={styles.dropdownContainer}>
                  <Item>
                    <Label style={labelStyle}>Store Status</Label>
                    <Input
                      editable={false}
                    />
                  </Item>
                  <Image
                    style={styles.dropdownIcon}
                    source={require("../../assets/Icons/Dark/SortDown.png")}
                  />
                </View>
              </View>
              <View style={styles.coulmns1}>
                <View style={styles.dropdownContainer}>
                  <Item>
                    <Label style={labelStyle}>Visit Number</Label>
                    <Input
                      editable={false}
                    />
                  </Item>
                  <Image
                    style={styles.dropdownIcon}
                    source={require("../../assets/Icons/Dark/SortDown.png")}
                  />
                </View>
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
                  <Item floatingLabel stackedLabel>
                    <Label style={labelStyle}>Current RSPs in stores</Label>
                    <Input
                      defaultValue="2"
                    />
                  </Item>
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
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>Name</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>Email</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<View style={styles.dropdownContainer}>
										<Item>
											<Label style={labelStyle}>IRRP Registered</Label>
											<Input
												editable={false}
											/>
										</Item>
										<Image
											style={styles.dropdownIcon}
											source={require("../../assets/Icons/Dark/SortDown.png")}
										/>
									</View>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>Courses Completed</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
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
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>Total Attendees in Training</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>IREP Courses in Store</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
								</View>
							</View>
							<View style={styles.formSection}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTxt}>Training Course</Text>
								</View>
                {
                  [1, 2, 3, 4, 5].map((course) => (
                    <View style={styles.coulmns2} key={course}>
                      <View style={[styles.dropdownContainer, styles.widthHalf]}>
                        <Item floatingLabel stackedLabel>
                          <Label style={labelStyle}>Training Course {course}</Label>
                          <Input
                            editable={false}
                          />
                        </Item>
                        <Image
                          style={styles.dropdownIcon}
                          source={require("../../assets/Icons/Dark/SortDown.png")}
                        />
                      </View>
                      <Item floatingLabel stackedLabel style={styles.widthHalf}>
                        <Label style={labelStyle}>Attendance</Label>
                        <Input
                          secureTextEntry={false}
                          onBlur={this.handleBlur}
                          onFocus={this.handleFocus}
                        />
                      </Item>
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
                    onValueChange={(switch1) => {
                      this.setState({
                        switch1,
                      })
                    }}
                  />
								</View>
                <Text style={styles.merchInfoTxt}>Merchandiser Information</Text>
							</View>
							<View style={styles.formSection}>
                <View style={styles.switchContainer}>
									<Text style={styles.switchTxt}>2-in-1 PCs (9)</Text>
                  <Switch
                    value={this.state.switch1}
                    onValueChange={(switch1) => {
                      this.setState({
                        switch1,
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
								<View style={[styles.coulmns1, styles.textbox]}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>IREP Courses in Store</Label>
										<Input
                      multiline
											secureTextEntry={false}
											onBlur={this.handleBlur}
                      onFocus={this.handleFocus}
                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
										/>
									</Item>
								</View>
              </View>
							<View style={styles.formSection}>
                <View style={styles.switchContainer}>
									<Text style={styles.switchTxt}>Laptops (9)</Text>
                  <Switch
                    value={this.state.switch1}
                    onValueChange={(switch1) => {
                      this.setState({
                        switch1,
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
								<View style={[styles.coulmns1, styles.textbox]}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>IREP Courses in Store</Label>
										<Input
                      multiline
											secureTextEntry={false}
											onBlur={this.handleBlur}
                      onFocus={this.handleFocus}
                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
										/>
									</Item>
								</View>
              </View>
							<View style={styles.formSection}>
                <View style={styles.switchContainer}>
									<Text style={styles.switchTxt}>ALL-in-1 PCs (3)</Text>
                  <Switch
                    value={this.state.switch1}
                    onValueChange={(switch1) => {
                      this.setState({
                        switch1,
                      })
                    }}
                  />
								</View>
                <ImageGrid isAddEnabled={false} images={[
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                  require('../../assets/Images/grid-img.jpg'),
                ]}/>
								<View style={[styles.coulmns1, styles.textbox]}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>IREP Courses in Store</Label>
										<Input
                      multiline
											secureTextEntry={false}
											onBlur={this.handleBlur}
                      onFocus={this.handleFocus}
                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
										/>
									</Item>
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
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>Competitor Name</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<View style={styles.dropdownContainer}>
										<Item>
											<Label style={labelStyle}>POSM Installed</Label>
											<Input
												editable={false}
											/>
										</Item>
										<Image
											style={styles.dropdownIcon}
											source={require("../../assets/Icons/Dark/SortDown.png")}
										/>
									</View>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>Description</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>PC Brand</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>PC Description</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
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
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>Current</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>Outdated</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>Refresh/Deployment Opportunity</Label>
										<Input
											secureTextEntry={false}
											onBlur={this.handleBlur}
											onFocus={this.handleFocus}
										/>
									</Item>
								</View>
								<View style={styles.coulmns1}>
									<Item floatingLabel stackedLabel>
										<Label style={labelStyle}>Description</Label>
										<Input
                      multiline
											secureTextEntry={false}
											onBlur={this.handleBlur}
                      onFocus={this.handleFocus}
                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
										/>
									</Item>
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
