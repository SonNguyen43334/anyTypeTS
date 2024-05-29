import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAppNavigation } from '../../utils/useAppNavigation';

const Home = () => {
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("BottomTab", {
          screen: "Screen1",
        })}
      >
        <Text>Screen 1</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
