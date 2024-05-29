import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Header, {LeftButtonProps, RightButtonProps} from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {
  Category,
  CategoriesProps,
  CategoryProps,
} from '../components/Categories';
import Search, {SearchProps} from '../components/Search';
import Slider, {ImageSliderProps} from '../components/Slider';

const HomeScreen = () => {
  const navigation = useNavigation();
  const listIconLeft: LeftButtonProps[] = [
    {
      icon: require('../constants/images/ic_leaves.png'),
      type: 'icon',
      onPress: () => {
        console.log('000000000');
      },
      disable: true,
    },
    {
      type: 'text',
      label: 'PLANTSCAPE',
      onPress: () => {
        navigation.goBack();
      },
      labelStyle: {
        fontSize: 18,
        color: '#0D986A',
        fontWeight: '600',
      },
    },
  ];
  const listIconRight: RightButtonProps[] = [
    {
      icon: require('../constants/images/ic_noti.png'),
      type: 'icon',
      onPress: () => {
        console.log('1111111');
      },
      iconStyle: {width: 20, height: 20},
      disable: false,
    },
    {
      icon: require('../constants/images/ic_menu.png'),
      type: 'icon',
      onPress: () => {
        console.log('h22222222');
      },
      iconStyle: {width: 20, height: 20},
      disable: false,
    },
  ];
  const listCategories: CategoryProps[] = [
    {
      label: 'indoor',
      icon: require('../constants/images/ic_indoor_active.png'),
      iconStyle: {width: 35, height: 35},
      onPress: () => {
        console.log('1');
      },
      isActive: true,
      activeColor: '#0D986A',
      icon_active: require('../constants/images/ic_indoor_active.png'),
    },
    {
      label: 'flower',
      icon: require('../constants/images/ic_flower.png'),
      iconStyle: {width: 35, height: 35},
      onPress: () => {
        console.log('2');
      },
      isActive: false,
      activeColor: '#0D986A',
      icon_active: require('../constants/images/ic_flower_active.png'),
    },
    {
      label: 'green',
      icon: require('../constants/images/ic_green.png'),
      iconStyle: {width: 35, height: 35},
      onPress: () => {
        console.log('3');
      },
      isActive: false,
      activeColor: '#0D986A',
      icon_active: require('../constants/images/ic_green_active.png'),
    },
  ];
  const imgList: ImageSliderProps[] = [
    {
      url: require('../constants/images/banner2.png'),
      active: true,
    },
    {
      url: require('../constants/images/banner3.jpeg'),
      active: false,
    },
    {
      url: require('../constants/images/banner4.jpeg'),
      active: false,
    },
    {
      url: require('../constants/images/banner5.jpeg'),
      active: false,
    },
  ];
  return (
    <View style={{backgroundColor: 'white'}}>
      <Header listIconLeft={listIconLeft} listIconRight={listIconRight} />
      <Slider images={imgList} />
      <Search
        label={'search'}
        onRightPress={() => {
          console.log('sonnnn');
        }}
        iconLeft={require('../constants/images/ic_search.png')}
        iconRight={require('../constants/images/ic_qr.png')}
      />
      <Category data={listCategories} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
