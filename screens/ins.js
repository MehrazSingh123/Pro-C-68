import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Imported App AppHeader
import AppHeader from '../components/AppHeader';

class ins extends React.Component {
    render() { 
        return ( 
            <View>
               <AppHeader/>
                <Text style={styles.text}>
                    Instagram
                </Text>
            </View>
        );
    }
}
 
export default ins;

const styles = StyleSheet.create ({
    text: {
        textAlign: 'center',
        justifyContent: 'center', 
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 200,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'blue',
    }
})