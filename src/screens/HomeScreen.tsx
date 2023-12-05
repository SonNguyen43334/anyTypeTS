import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Header
        listIconLeft={[
          {
            icon: require('../constants/images/ic_leaves.png'),
            type: 'icon',
            onPress: () => {
              console.log('hunglong');
            },
            disable:true,
          },
          {
            // icon: require('../constants/images/welcome.jpeg'),
            type: 'text',
            label :'PlantScape',
            onPress: () => {
              navigation.goBack()
            },
            labelStyle:{
              fontSize : 18,
              color : '#0D986A',
              fontWeight : '600'
            }
          },
        ]}
        label={'ssdasda'}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
