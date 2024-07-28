import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
 } from 'react-native';

 import Lista from './src/lista';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                [
                    {
                        "id": "1",
                        "nome": "Lucas Coelho",
                        "descricao": "Mais um dia de muitos bugs",
                        "imgPerfil": "https://source.unsplash.com/random/150x150?sig=1",
                        "imgPublicacao": "https://source.unsplash.com/random/800x600?sig=1",
                        "likeada": false,
                        "likers": 0
                    },
                    {
                        "id": "2",
                        "nome": "Ana Souza",
                        "descricao": "Explorando novos horizontes",
                        "imgPerfil": "https://source.unsplash.com/random/150x150?sig=2",
                        "imgPublicacao": "https://source.unsplash.com/random/800x600?sig=2",
                        "likeada": false,
                        "likers": 0
                    },
                    {
                        "id": "3",
                        "nome": "João Pereira",
                        "descricao": "Desfrutando um café",
                        "imgPerfil": "https://source.unsplash.com/random/150x150?sig=3",
                        "imgPublicacao": "https://source.unsplash.com/random/800x600?sig=3",
                        "likeada": false,
                        "likers": 0
                    },
                    {
                        "id": "4",
                        "nome": "Maria Oliveira",
                        "descricao": "Apreciando a natureza",
                        "imgPerfil": "https://source.unsplash.com/random/150x150?sig=4",
                        "imgPublicacao": "https://source.unsplash.com/random/800x600?sig=4",
                        "likeada": false,
                        "likers": 0
                    },
                    {
                        "id": "5",
                        "nome": "Pedro Lima",
                        "descricao": "Trabalhando em um novo projeto",
                        "imgPerfil": "https://source.unsplash.com/random/150x150?sig=5",
                        "imgPublicacao": "https://source.unsplash.com/random/800x600?sig=5",
                        "likeada": false,
                        "likers": 0
                    }
                ]
                
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity>
                <Image 
                    source={require('./src/img/logo.png')}
                    style={styles.logo}
                />
                </TouchableOpacity>
               
               <TouchableOpacity>
               <Image 
                    source={require('./src/img/send.png')}
                    style={styles.send}
                />
               </TouchableOpacity>
                
            </View>

            <View>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={this.state.feed}
                    renderItem={ ({item}) => <Lista data={item} />}
                />
            </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        height: 55,
        color: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 1,
    },
    send: {
        width: 23,
        height: 23,
    }

});

export default App;