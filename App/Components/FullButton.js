import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/FullButtonStyles';
import ExamplesRegistry from '../Services/ExamplesRegistry';

// Note that this file (App/Components/FullButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Full Button', () => (
  <FullButton
    text="Hey there"
    onPress={() => window.alert('Full Button Pressed!')}
  />
));

export default class FullButton extends PureComponent {
  render() {
    const { text, style, onPress } = this.props;
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{text && text.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

FullButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};
