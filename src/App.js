import React from 'react';
import {View } from 'react-native';

//import Parte from './components/Primeiro';
import Parte, {Parte1,Parte2} from './components/Primeiro'

export default () => {
    return (
        <View>
            <Parte/>
            <Parte1/>
            <Parte2/>
        </View>
    )
}
