import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Post from "./Components/Post";


const postagem = [
  {codigo: 1, 
    titulo:'Aprendendo React Native', 
    autor: 'Jefferson Henrique', 
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  
  {codigo: 2, 
    titulo:'Aprendendo React Native', 
    autor: 'Jefferson Henrique', 
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  
  {codigo: 3, 
    titulo:'Aprendendo React Native', 
    autor: 'Jefferson Henrique', 
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
]

export default class App extends Component{

    render (){
      return (
        <View style={styles.container}>
          <ScrollView>
            {postagem.map(postagem =>(
                <Post key={postagem.codigo} titulo={postagem.titulo}
                autor={postagem.autor} conteudo={postagem.conteudo}
                />
            ))}
              
          </ScrollView>
        </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
  },


});