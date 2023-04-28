import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,Text} from 'react-native';

const CustomDrawerContent = (props) => {
    const navigation = useNavigation()
    // navigation.dispatch(DrawerActions.toggleDrawer())
    return(
        <View style={{flex:1}}>
            <Text>
                hello   
            </Text>
        </View>
    )
};
export default CustomDrawerContent;