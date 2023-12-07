import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

interface SliderProps {
  images: ImageSliderProps[];
}

export interface ImageSliderProps {
  url: ImageSourcePropType;
  active: boolean;
}

const Slider = ({images}: SliderProps) => {
  const flatListRef = useRef<FlatList | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref => (flatListRef.current = ref)}
        data={images}
        renderItem={({item, index}) => renderItem(item, index)}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          right: 30,
          height: 10,
          width: '50%',
          flexDirection: 'row',
          justifyContent : 'flex-end'
        }}>
        {images.map((ele, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: index == currentIndex ? '#0D986A' : 'white',
                width: index == currentIndex ? 20 : 5,
                height: 5,
                borderRadius: 360,
                marginLeft:10
              }}></View>
          );
        })}
      </View>
    </View>
  );
};

const renderItem = ({url, active}: ImageSliderProps, index: number) => {
  return (
    <View style={styles.imgContainer}>
      <Image
        source={url}
        style={{
          width: Dimensions.get('screen').width * 0.91,
          height: Dimensions.get('screen').height * 0.3,
          borderRadius: 15,
          marginLeft: 10,
        }}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
  },
  container: {
    paddingRight: 16,
    paddingLeft: 10,
    marginVertical: 10,
  },
});
