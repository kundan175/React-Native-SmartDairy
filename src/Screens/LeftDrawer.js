import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,Text} from 'react-native';

const LeftDrawer = (props) => {
    const navigation = useNavigation(); 
    // navigation.dispatch(DrawerActions.toggleDrawer())    
    return(
        <View>
            <Text>
                hello   
            </Text>
        </View>
    )
};
export default LeftDrawer;