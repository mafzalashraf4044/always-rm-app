// @flow
import * as React from "react";
import { Item, Input, Icon, Toast, Form, Label, View, Text } from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../stories/screens/Login";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export interface Props {
  navigation: any;
}
export interface State {}
class LoginForm extends React.Component<Props, State> {
  textInput: any;

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <Item error={error && touched} floatingLabel>
        <Label>{input.name === "email" ? "Email" : "Password"}</Label>
        <Input
          ref={c => (this.textInput = c)}
          secureTextEntry={input.name === "password" ? true : false}
          {...input}
          style={{
            marginLeft: 0,
          }}
        />
      </Item>
    );
  }

  login() {
    this.props.navigation.navigate("Drawer");
    // if (this.props.valid) {
    //   this.props.navigation.navigate("Drawer");
    // } else {
    //   Toast.show({
    //     text: "Enter Valid Username & password!",
    //     duration: 2000,
    //     position: "top",
    //     textStyle: { textAlign: "center" }
    //   });
    // }
  }

  render() {
    const form = (
      <Form>
        <Field
          name="email"
          component={this.renderInput}
          validate={[email, required]}
        />
        <Field
          name="password"
          component={this.renderInput}
          validate={[alphaNumeric, minLength8, maxLength15, required]}
        />
        {
          !this.props.valid &&
          <View padder>
            <Text> {this.props.valid}You have keyed in wrong email/password</Text>
          </View>
        }
      </Form>
    );
    return (
      <Login
        navigation={this.props.navigation}
        loginForm={form}
        onLogin={() => this.login()}
      />
    );
  }
}
const LoginContainer = reduxForm({
  form: "login"
})(LoginForm);
export default LoginContainer;