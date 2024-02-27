import React from 'react';
import {View } from 'react-native';

//import Parte from './components/Primeiro';
import Parte, {Parte1,Parte2} from './components/Primeiro'

function App(){
    return (
        <View>
            <Parte/>
            <Parte1/>
            <Parte2/>
        </View>
    )
}

export default App