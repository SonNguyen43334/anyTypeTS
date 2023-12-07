import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ImageStyle,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ColorValue,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';

export interface CategoryProps {
  label: String;
  icon: ImageSourcePropType;
  icon_active: ImageSourcePropType;
  labelStyle?: TextStyle;
  iconStyle?: ImageStyle;
  activeColor?: ColorValue;
  onPress: Function;
  isActive: boolean;
}

export interface CategoriesProps {
  data: Array<CategoryProps>;
}

// export default Categories;

export const Category = ({data}: CategoriesProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handlePress = (index: number) => {
    data[index].onPress();
    setActiveIndex(index);
  };

  const res = data.map((e, i) => {
    const isActive = activeIndex === i;
    return (
      <Animated.View
        entering={FadeInDown.duration(1000)}
        key={i}
        style={{justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => handlePress(i)}>
          <Image
            source={isActive ? e.icon_active : e.icon}
            tintColor={isActive ? '#0D986A' : 'black'}
            style={[{width: 40, height: 40, alignSelf: 'center'}, e.iconStyle]}
          />
          <Text
            style={[
              {
                fontSize: 15,
                color: isActive ? e.activeColor || 'blue' : 'black',
                fontWeight: isActive ? 'bold' : '300',
              },
              e.labelStyle,
            ]}>
            {e.label}
          </Text>
        </TouchableOpacity>
        {isActive && <View style={styles.dash}></View>}
      </Animated.View>
    );
  });

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginVertical: 10,
        height: Dimensions.get('screen').height * 0.08,
        paddingVertical: 8,
      }}>
      {res}
    </View>
  );
};

Category.defaultProps = {
  data: [],
};

const styles = StyleSheet.create({
  dash: {
    width: '90%',
    backgroundColor: '#0D986A',
    height: 1,
    marginTop: 5,
  },
  container: {
    flex: 1,
  },
});
