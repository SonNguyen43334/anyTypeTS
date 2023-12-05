// import * as React from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';

// function MyTabBar(props: BottomTabBarProps) {
//   const {state, descriptors, insets, navigation} = props;
//   console.log(state, 'state');
//   return (
//     <View style={{flexDirection: 'row'}}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const isFocused = state.index === index;
//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };
//         const icon = options.tabBarIcon;

//         return (
//           <TouchableOpacity
//             key={route.key}
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{
//               flex: 1,
//               paddingVertical: 20,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             {icon && (
//               <Icon
//                 name={icon.name}
//                 size={30}
//                 color={isFocused ? '#673ab7' : '#222'}
//               />
//             )}
//             <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
//               {route.name}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// export default MyTabBar;
