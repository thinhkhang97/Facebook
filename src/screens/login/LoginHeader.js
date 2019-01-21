// @flow
import * as React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import { View, Text } from 'react-native';
import { FB_MAIN_COLOR } from 'asset/colors';

type Props = {};

class LoginHeader extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="facebook" size={100} color="#fff" />
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: FB_MAIN_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 300,
  },
};
export default LoginHeader;
