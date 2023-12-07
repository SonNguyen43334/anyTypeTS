import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ItemProps {
  image: ImageSourcePropType;
  description: String;
  title: String;
  price: Number;
  quantity: Number;
  favorite: boolean;
}

interface ListProps {
  list : Array<ItemProps>
}

const CustomList = ({
  list
}: ListProps) => {
  return (
    <View style={styles.container}>
      <Text>CustomList</Text>
    </View>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  container: {},
});
