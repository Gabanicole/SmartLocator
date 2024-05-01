import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const UserProfileScreen = ({ navigation }) => {
  const handleEditProfilePress = () => {
    // Navigate to the profile editing screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.subtitle}>Username: JohnDoe</Text>
      <Text style={styles.subtitle}>Email: johndoe@example.com</Text>
      <Button title="Edit Profile" onPress={handleEditProfilePress} />
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
    marginBottom: 10,
  },
});

export default UserProfileScreen;
