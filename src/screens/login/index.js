// @flow
import * as React from 'react';
import { View, Text } from 'react-native';
import LoginHeader from './LoginHeader';

type Props = {};

class Login extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginHeader />
      </View>
    );
  }
}
export default Login;
