import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Slider from '@react-native-community/slider';

class Sliders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: 0
        };
    };

    render() {

        return (
            <View style={styles.container}>

            <Slider 
                minimumValue={0}
                maximumValue={100}
                onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
                value={this.state.valor}
                minimumTrackTintColor='#00f000'
                maximumTrackTintColor='#ff0000s'
            />

            <Text style={{textAlign: 'center', fontSize: 30}}>
                Volume: {this.state.valor.toFixed(0)}
            </Text>

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

export default Sliders;