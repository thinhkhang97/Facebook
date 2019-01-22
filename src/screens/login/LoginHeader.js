// @flow
import * as React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import { View, Text } from 'react-native';
import { FB_MAIN_COLOR } from 'asset/colors';

const MAX_HEIGHT = 300;

type Props = {
  style?: object,
};

type State = {
  height: number,
};

class LoginHeader extends React.Component<Props, State> {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
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
    maxHeight: MAX_HEIGHT,
  },
};
export default LoginHeader;
