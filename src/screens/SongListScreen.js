// src/screens/SongListScreen.js

import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import theme from '../theme/theme';
import Header from '../components/Header';
import SongListItem from '../components/SongListItem';

const SongListScreen = ({ navigation }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSongs = async () => {
    try {
      const response = await fetch('https://itunes.apple.com/search?term=Justin+beiber');
      const data = await response.json();
      setSongs(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const renderItem = ({ item }) => (
    <SongListItem
      song={item}
      onPress={() => navigation.navigate('SongDetails', { song: item })}
    />
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Songs" />
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item.trackId.toString()}
        contentContainerStyle={styles.listContainer}
        onRefresh={fetchSongs}
        refreshing={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingBottom: theme.spacing.large,
  },
});

export default SongListScreen;
