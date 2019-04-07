import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Post extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.superior}>
          <Text style={styles.tituloPost}>
              {this.props.titulo}
          </Text>

          <Text style={styles.autorPost}>
              {this.props.autor}
          </Text>

        </View>
          
          <Text style={styles.texto}>
              {this.props.conteudo}
          </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin : 15,
  },

  tituloPost: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 100,
    color: '#00000F',
  },

  autorPost:{
    fontSize:14,
    fontWeight: 'bold',
    color: '#00000F',
    marginRight:100,
  },

  texto:{
    fontSize:16,
    color: '#00000F',
    fontWeight:'bold',
    margin:10,
  },

  superior:{
    margin: 20,
    justifyContent:'center',
  }

});