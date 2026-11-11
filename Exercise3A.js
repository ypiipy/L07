import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },

    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
});

const Exercise3A = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: 'powderblue' }]}>
                <Text
                    style={{textAlign: styles.child.textAlign, fontSize: styles.child.fontSize,}}>
                    Child One
                </Text>
            </View>

            <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                <Text style={{textAlign: styles.child.textAlign, fontSize: styles.child.fontSize,}}>
                    Child Two
                </Text>
            </View>

            <View style={[styles.child, { backgroundColor: 'steelblue' }]}>
                <Text style={{textAlign: styles.child.textAlign, fontSize: styles.child.fontSize,}}>
                    Child Three
                </Text>
            </View>
        </View>
    );
};

export default Exercise3A;