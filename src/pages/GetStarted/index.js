import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'

export var width = Dimensions.get('window').width;
export var height = Dimensions.get('window').height;

const getStarted = require('../../assets/getStarted.jpg');

const GetStarted = ({navigation}) => {

  const handleLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Image source={getStarted} width={198} height={218} />
      <Text style={styles.title}>Seja bem vindo ao nosso app.</Text>
      <Text style={styles.subTitle}>Conheça todas as ferramentas que disponibilizamos para você. Clique no botão abaixo e começe agora mesmo.</Text>
      <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
        <Text style={styles.btnText}>Botão</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center'
  },
  btn: {
    position: "absolute",
    width: width-40,
    borderWidth: 1,
    borderColor: '#3646DB',
    borderRadius: 7,
    paddingTop: 10,
    paddingBottom: 10,
    bottom: 35,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3646DB',
  }
})
