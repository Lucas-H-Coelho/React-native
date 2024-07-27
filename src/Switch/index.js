import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

class Switchs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: true
        };
    };

    render() {
        return (
            <View style={styles.container}>

                <Switch
                    value={this.state.status}
                    onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    }
});

export default Switchs;