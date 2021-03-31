import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

import { styles } from './styles/styles';

class Feed extends Component {
    render(){
        return(
            <View style = {styles.center}>
                <Text style={styles.title}>GoApp Scanner</Text>
                <Button
                    title='Scanner les promotions !'
                    onPress={( ) => { this.props.navigation.navigate('Scanner')}}
                />
            </View>
        );
    }
}

export default Feed;