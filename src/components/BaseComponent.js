// @flow
import * as React from 'react';
import { View, Text } from 'react-native';

type Props = {};

class BaseComponent extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text>Base component</Text>
      </View>
    );
  }
}
export default BaseComponent;
