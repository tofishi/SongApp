// src/components/Header.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header as RNHeader } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../theme/theme';

const Header = ({ title, onBack }) => (
  <RNHeader
    containerStyle={styles.header}
    leftComponent={
      onBack && (
        <Icon
          name="arrow-back"
          size={28}
          color={theme.colors.white}
          onPress={onBack}
        />
      )
    }
    centerComponent={{ text: title, style: styles.title }}
  />
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    width: '100%',
  },
  title: {
    color: theme.colors.white,
    fontSize: 22,
     fontWeight: 'bold',
  },
});

export default Header;
