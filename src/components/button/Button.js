// @flow
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string,
  onPress: any,
  // styles
  disable?: boolean,
  solid?: boolean,
  outline?: boolean,
};

class Button extends React.Component<Props> {

  static defaultProps = {
    title: 'Button',
    disable: false,
    solid: true
  }

  render() {
    
    return (
      <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress()}>
        <Text style={[
          this.props.solid?styles.solid:styles.outline,
          this.props.disable&&styles.disable
          ]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const STYLES = {
  container: {
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 30,
    alignItems: 'center',
    width: '100%'
  },
  textDisable: {
    color: 'gray',
    fontWeight: '500'
  },
  solid: {
    
  }

}

export default Button;
