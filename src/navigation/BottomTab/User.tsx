import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const User: React.FC = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <View>
            <Text>Home Screen</Text>
            <Text>User Data: {JSON.stringify(user)}</Text>
        </View>
    );
};

export default User;