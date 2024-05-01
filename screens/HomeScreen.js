import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleStartButtonPress = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indoor Localization App</Text>
      <Text style={styles.subtitle}>Welcome to your indoor navigation solution!</Text>
      <Button title="Start" onPress={handleStartButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
  },
});

export default HomeScreen;
