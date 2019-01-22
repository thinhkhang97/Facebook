// @flow
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FB_MAIN_COLOR } from 'asset/colors';

type Props = {
  title: string,
  onPress?: any,
  // styles
  disable?: boolean,
  solid?: boolean,
  outline?: boolean,
  transparent?: boolean,
};

class Button extends React.Component<Props> {
  static defaultProps = {
    title: 'Button',
    disable: false,
    solid: true,
  };

  getStyles() {
    let styleBtn = {
      background: STYLES.solid.background,
      text: STYLES.solid.text,
    };
    if (this.props.outline) {
      styleBtn = {
        background: STYLES.outline.background,
        text: STYLES.outline.text,
      };
    } else if (this.props.transparent) {
      styleBtn = {
        background: STYLES.transparent.background,
        text: STYLES.transparent.text,
      };
    }
    if (this.props.disable) {
      styleBtn.text = STYLES.textDisable;
    }
    return styleBtn;
  }

  render() {
    const styleBtn = this.getStyles();
    return (
      <TouchableOpacity
        style={[STYLES.container, styleBtn.background]}
        onPress={() => this.props.onPress && this.props.onPress()}
      >
        <Text style={styleBtn.text}>{this.props.title}</Text>
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
    width: '100%',
  },
  textDisable: {
    color: 'gray',
    fontWeight: '500',
  },
  //////////
  solid: {
    background: {
      backgroundColor: FB_MAIN_COLOR,
    },
    text: {
      color: 'white',
      fontWeight: '500',
    },
  },
  /////////
  outline: {
    background: {
      backgroundColor: 'white',
      borderWidth: 1.5,
      borderColor: FB_MAIN_COLOR,
    },
    text: {
      color: FB_MAIN_COLOR,
      fontWeight: '500',
    },
  },
  /////////
  transparent: {
    background: {
      backgroundColor: 'transparent',
    },
    text: {
      color: FB_MAIN_COLOR,
      fontWeight: '500',
    },
  },
};

export default Button;
