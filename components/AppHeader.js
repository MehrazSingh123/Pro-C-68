import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

class AppHeader extends React.Component {
    render() { 
        return (  
            <View style={styles.AppHeader}>
                <Text style={styles.text}>
                    BUZZ APP
                </Text>
            </View>
        );
    }
}
 
export default AppHeader;

const styles = StyleSheet.create ({
    AppHeader: {
        backgroundColor: 'pink',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        padding: 15,
    }
})