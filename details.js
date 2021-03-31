import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState
} from '@react-navigation/native';

import { styles } from './styles/styles';


class Details extends Component {
    render(){
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Details screen</Text>
            <Button
                title='View Bottom Tabs'
                onPress={() => { }}
            />
            <Button 
                title='View Top Tabs'
                onPress={() => { }}
            />
            </View>
        );
    }
}

export default Details;