// src/components/PlaybackControls.js

import React, { useState } from 'react';
import { View, Slider, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../theme/theme';

const PlaybackControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={theme.colors.primary}
          thumbTintColor={theme.colors.primary}
        />
        <View style={styles.timeContainer}>
        <Text>0:00</Text>
        <Text>03:00</Text>
      </View>
      </View>
      <View style={styles.controls}>
        <Icon name="fast-rewind" size={40} color={theme.colors.primary} />
        <Icon
          name={isPlaying ? 'pause' : 'play-arrow'}
          size={60}
          color={theme.colors.primary}
          onPress={togglePlayPause}
        />
        <Icon name="fast-forward" size={40} color={theme.colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.large,
  },
  sliderContainer: {
    paddingHorizontal: theme.spacing.large,
  },
  slider: {
    width: 250,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: theme.spacing.medium,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});

export default PlaybackControls;
