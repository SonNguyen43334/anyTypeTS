import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle
} from 'react-native';
import React from 'react';

interface HeaderProps {
  label: String;
  listIconLeft?: Array<LeftButtonProps>;
  labelStyle?: ViewStyle;
  style?: ViewStyle;
  listIconRight: Array<RightButtonProps>;
}

interface RightButtonProps {
  type: 'icon' | 'text';
  label: String;
  onPress: Function;
  icon: String;
  disable: boolean;
}

interface IconRightProps {
  data: Array<RightButtonProps>;
}
interface LeftButtonProps {
  type: 'icon' | 'text';
  label?: String;
  onPress: Function;
  icon?: ImageSourcePropType | undefined;
  labelStyle? : TextStyle;
  disable?: boolean;
}

interface IconLeftProps {
  data: Array<LeftButtonProps>;
}

const Header = ({
  label,
  labelStyle,
  listIconRight,
  listIconLeft,
  style,
}: HeaderProps) => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        {listIconLeft && listIconLeft.length > 0 && (
          <LeftIcon data={listIconLeft} />
        )}
        <Text style={styles.label}>{label}</Text>
        <View style={{flex: 5}}></View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

let LeftIcon = ({data}: IconLeftProps) => {
  let result = data.map((ele, index) => {
    return (
      <TouchableOpacity
        disabled={ele.disable}
        key={index}
        style={{marginLeft: index !== 0 ? 10 : 0}}
        onPress={() => {
          ele.onPress();
        }}>
        {ele.type == 'text' ? (
          <Text style={ele.labelStyle}>{ele.label}</Text>
        ) : ele.icon ? (
          <Image style={{width: 30, height: 30}} source={ele.icon} />
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  });
  return (
    <View
      style={{
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {result}
    </View>
  );
};

Header.defaultProps = {
  listIconRight: [],
  listIconLeft: [],
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  label: {
    flex: 5,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
