import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginCreators, { CountSelector } from './LoginRedux';
import RoundedButton from '../../App/Components/RoundedButton';

class LoginScreen extends React.PureComponent {
  render() {
    const {
      count,
      countIncrease,
      userNameGitHub,
      getUserNameGitHub,
      clearName,
    } = this.props;
    return (
      <View>
        <Text>Some value from store: {count}</Text>
        <Text>Username git hub: {userNameGitHub}</Text>
        <RoundedButton
          text="count number"
          onPress={() => countIncrease(count + 1)}
        />
        <RoundedButton
          text="get info github"
          onPress={() => getUserNameGitHub('ledinhluongstd')}
        />
        <RoundedButton text="clear name" onPress={() => clearName()} />
      </View>
    );
  }
}

LoginScreen.propTypes = {
  count: PropTypes.number,
  userNameGitHub: PropTypes.string,
  countIncrease: PropTypes.func,
  getUserNameGitHub: PropTypes.func,
  clearName: PropTypes.func,
};

const mapStateToProps = state => ({
  count: CountSelector.count(state),
  userNameGitHub: CountSelector.username(state),
});

const mapDispatchToProps = dispatch => ({
  countIncrease: num => dispatch(LoginCreators.countNumber({ numberC: num })),
  getUserNameGitHub: username =>
    dispatch(LoginCreators.usernameGithub(username)),
  clearName: () => dispatch(LoginCreators.clearName()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
