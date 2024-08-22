// src/components/SongListItem.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../theme/theme';

const SongListItem = ({ song, onPress }) => {
  const { artworkUrl60, trackName, artistName, trackTimeMillis } = song;
  const minutes = Math.floor(trackTimeMillis / 60000);
  const seconds = ((trackTimeMillis % 60000) / 1000).toFixed(0);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: artworkUrl60 }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.trackName}>{trackName}</Text>
        <Text style={styles.artistName}>{artistName}</Text>
        <Text style={styles.trackTime}>
          {minutes}:{seconds < 10 ? '0' : ''}
          {seconds}
        </Text>
      </View>
      <Icon name="chevron-right" size={28} color={theme.colors.textSecondary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.white,
    marginVertical: theme.spacing.small,
    marginHorizontal: theme.spacing.large,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    marginLeft: theme.spacing.medium,
  },
  trackName: {
    fontSize: 16,
    // fontFamily: theme.fonts.bold,
    color: theme.colors.textPrimary,
  },
  artistName: {
    fontSize: 14,
    // fontFamily: theme.fonts.regular,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  trackTime: {
    fontSize: 12,
    // fontFamily: theme.fonts.regular,
    color: theme.colors.textSecondary,
  },
});

export default SongListItem;
