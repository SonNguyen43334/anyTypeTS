import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const animation1 = useSharedValue(0);
  const animation2 = useSharedValue(0);
  useEffect(() => {
    animation1.value = 0;
    animation2.value = 0;
    setTimeout(() => {
      animation1.value = withSpring(animation1.value + 10);
    }, 100);
    setTimeout(() => {
      animation2.value = withSpring(animation2.value + 30);
    }, 300);
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.animation1, {padding: animation1}]}>
        <Animated.View style={[styles.animation2, {padding: animation2}]}>
          <Image
            source={require('../constants/images/welcome.jpeg')}
            style={{height: 200, width: 200, borderRadius: 360}}
          />
        </Animated.View>
      </Animated.View>
      <Text style={styles.title}>Thanh Long Noodles</Text>
      <Text style={[styles.title,{fontSize:20}]}>Lan dau tien, trai thanh long co trong mi tom</Text>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    color: 'white',
    marginTop: 15,
  },
  animation2: {
    backgroundColor: 'white',
    borderRadius: 360,
  },
  animation1: {
    backgroundColor: '#D5E4',
    borderRadius: 360,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5E4C3',
  },
});
