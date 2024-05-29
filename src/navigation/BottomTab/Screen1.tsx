import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useAppNavigation } from '../../utils/useAppNavigation'


const Screen1 = () => {
    const navigation = useAppNavigation();
  return (
    <View style={{justifyContent:'center'}}>
        <TouchableOpacity onPress={() => {
            navigation.goBack();
        }}>
            <Text>
                Go Back
            </Text>
        </TouchableOpacity>
      <Text>Screen1</Text>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})