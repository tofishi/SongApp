// src/screens/SongDetailsScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../theme/theme';
import Header from '../components/Header';
import PlaybackControls from '../components/PlaybackControls';

const SongDetailsScreen = ({ route, navigation }) => {
  const { song } = route.params;

  return (
    <View style={styles.container}>
      <Header title="Song Details" onBack={() => navigation.goBack()} />
      <View style={styles.detailsContainer}>
        <Image source={{ uri: song.artworkUrl100 }} style={styles.image} />
        <Text style={styles.title}>{song.trackName}</Text>
        <Text style={styles.artist}>{song.artistName}</Text>
        <Text style={styles.duration}>{song.collectionName}</Text>
        <PlaybackControls />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.large,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: theme.colors.textPrimary,
    marginTop: theme.spacing.medium,
    textAlign: 'center',
  },
  artist: {
    fontSize: 18,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.small,
    textAlign: 'center',
  },
  duration: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.small,
    textAlign: 'center',
  },
});

export default SongDetailsScreen;
