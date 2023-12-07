import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  View,
  TextInput,
  Image,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ImageStyle} from 'react-native';

export interface SearchProps {
  iconLeft: ImageSourcePropType;
  label: String;
  onRightPress: Function;
  labelStyle?: TextStyle;
  iconLeftStyle?: ImageStyle;
  iconRight: ImageSourcePropType;
  iconRightStyle?: ImageStyle;
  placeholder?: TextInputProps;
}

const Search = ({
  iconLeft,
  iconLeftStyle,
  iconRight,
  iconRightStyle,
  label,
  labelStyle,
  onRightPress,
  placeholder,
}: SearchProps) => {
  const [isFocused, setIsFocused] = useState<Boolean>(false);
  return (
    <View
      style={[styles.container, {borderColor: isFocused ? '#97BA86' : 'gray'}]}>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Image
          tintColor={isFocused ? '#97BA86' : 'black'}
          style={{width: 20, height: 20}}
          source={iconLeft}
        />
        <TextInput
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholder="Search"
          placeholderTextColor={isFocused ? '#97BA86' : 'gray'}
          style={[labelStyle, {color: 'gray'}]}
        />
      </View>
      <TouchableOpacity
        style={{flex: 6}}
        onPress={() => {
          onRightPress();
        }}>
        <Image
          source={iconRight}
          style={{width: 20, height: 20, alignSelf: 'flex-end'}}
          tintColor={isFocused ? '#97BA86' : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    marginHorizontal: 16,
    marginVertical: 10,
    flexDirection: 'row',
  },
});
