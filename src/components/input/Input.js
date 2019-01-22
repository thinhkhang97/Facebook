// @flow
import * as React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  placeholder?: string,
  secured?: boolean,
  onChangeText: any,
  value?: string,
};

type State = {
  value: string,
};

class Input extends React.Component<Props, State> {
  static defaultProps = {
    placeholder: 'input',
    secured: false,
  };

  state = {
    value: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.value}
          onChangeText={text => this.props.onChangeText()}
          style={styles.inputContainer}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secured}
        />
        {/* <TouchableOpacity
          style={{ opacity: this.state.show ? 1 : 0 }}
          onPress={() => this.handleOnPress()}
        >
          <Icon name="closecircle" />
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = {
  container: {
    borderWidth: 0.5,
    width: '100%',
    height: 40,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
  },
};
export default Input;
