import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3A from "./Exercise3A";
import Exercise3B from "./Exercise3B";
import Exercise3C from "./Exercise3C";
import Exercise3D from "./Exercise3D";
import Exercise3E from "./Exercise3E";
import Exercise4 from "./Exercise4";

const L07App = () => {
    return (
        <ScrollView>
        <View style={{marginTop: 30, flex: 1}}>
            <Text style={{fontSize:30}}>EXERCISE 1</Text>
            <Exercise1 />

            <Text style={{fontSize:30}}>EXERCISE 2</Text>
            <Exercise2 />

            <Text style={{fontSize:30}}>EXERCISE 3A</Text>
            <Exercise3A />

            <Text style={{fontSize:30}}>EXERCISE 3B</Text>
            <Exercise3B />

            <Text style={{fontSize:30}}>EXERCISE 3C</Text>
            <Exercise3C />

            <Text style={{fontSize:30}}>EXERCISE 3D</Text>
            <Exercise3D />

            <Text style={{fontSize:30}}>EXERCISE 3E</Text>
            <Exercise3E />

            <Text style={{fontSize:30}}>EXERCISE 4</Text>
            <Exercise4 />
        </View>
        </ScrollView>

    );
};

export default L07App;
