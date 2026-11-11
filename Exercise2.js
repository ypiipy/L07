import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1
    },
    boxText: {
        textalign: 'center',
        color: 'white',
    },
    title: {
        fontweight: 'bold',
    },
});

const Exercise2 = () => {
    return (
        <View>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>
                    Who We Are
                </Text>
            </View>

            <View style={styles.greenBox}>
                <Text style={styles.boxText}>
                    Our People
                </Text>
            </View>

            <View style={styles.greenBox}>
                <Text style={styles.boxText}>
                    Our Campus
                </Text>
            </View>
        </View>
    );
};

export default Exercise2;
