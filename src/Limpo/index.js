import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Mudar extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    };

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    }
});

export default Mudar;