// @flow
import * as React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import LoginHeader from './LoginHeader';
import Button from 'components/button/Button';
import Input from 'components/input/Input';

type Props = {};
type State = {
  emailOrPhone: string,
  password: string,
};
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class Login extends React.Component<Props, State> {
  state = {
    emailOrPhone: '',
    password: '',
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <LoginHeader />
        </View>
        <View style={styles.content}>
          <Input
            placeholder="Email or phone number"
            value={this.state.emailOrPhone}
            onChangeText={text => this.setState({ emailOrPhone: text })}
          />
          <Input
            placeholder="Password"
            secured
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />
          <Button title="Login" />
          <Button title="Forgot password?" transparent />
          <Button title="Back" transparent />
        </View>

        <View style={styles.footer}>
          <Button title="Create new account" outline />
        </View>
      </View>
    );
  }
}

const styles = {
  header: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: (SCREEN_HEIGHT / 100) * 20,
  },
  content: {
    flexGrow: 1,
    flexShrink: 2,
    flexBasis: 'auto',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  footer: { height: 40 },
};

export default Login;
