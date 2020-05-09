import React from 'react'
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const {width: screenWidth} = Dimensions.get('window');
const logo = require('../../assets/logo.jpg');
const avatar = require('../../assets/avatar.png');

const Login = ({navigation}) => {

  const handleGetStarted = () => {
    navigation.navigate('GetStarted');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image source={logo} width={78} height={79} />
        </View>

        <View style={styles.headerContent}>
          <View style={styles.headerContentItem, styles.headerContentItemActive}>
            <TouchableOpacity style={[styles.headerContentItemButton]}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerContentItem}>
            <TouchableOpacity style={styles.headerContentItemButton}>
              <Text style={styles.buttonText}>Sign</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.welcome}>
          <View style={styles.welcomeDescription}>
            <Text style={styles.welcomeTitle}>
              Hello, again,
            </Text>
            <Text style={styles.welcomeSubTitle}>
              Quinnbriar
            </Text>
            <Text style={styles.welcomeLink}>
              this ins't me
            </Text>
          </View>
          <View style={styles.contentAvatar}>
            <Image style={styles.avatar} source={avatar} width={60} height={60} />
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.labelInput}>E-mail</Text>
            <Input placeholder='digite seu e-mail'
              leftIcon={<Icon name='envelope' size={18} color='#666666' />} />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.labelInput}>Senha</Text>
            <Input placeholder='digite sua senha'
              leftIcon={<Icon name='lock' size={20} color='#666666' />} secureTextEntry={true} />
          </View>

          <View style={styles.formGroup}>
            <LinearGradient 
              start={{x: 0, y: 0}} 
              end={{x: 1, y: 0}} 
              colors={['#6E87FD', '#48C0D5', '#34E7BA']} 
              style={styles.linearGradientButton}>

              <TouchableOpacity style={styles.formButton}>
                <Text style={styles.formButtonText}>Login</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
            <Text style={styles.getStarted} onPress={() => handleGetStarted()}>Get Started</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.socials}>
            <Icon name="facebook" size={20} color="#6E87FD" style={styles.socialsIcon}  />
            <Icon name="instagram" size={20} color="#6E87FD" style={styles.socialsIcon} />
            <Icon name="twitter" size={20} color="#6E87FD" style={styles.socialsIcon} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    width: screenWidth,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 50,
  },
  headerContent: {
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerContentItem: {
    width: screenWidth/2,
    borderBottomWidth: 1,
    borderColor: '#CCC',
    opacity: 0.8,
  },
  headerContentItemActive: {
    width: screenWidth/2,
    borderBottomColor: '#3646DB',
    borderBottomWidth: 3,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  headerContentItemButton: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    width: screenWidth,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25,
    paddingBottom: 25,
  },
  welcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeDescription: {
    
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeSubTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  welcomeLink: {
    fontSize: 14,
    color: 'blue',
    marginTop: 15,
  },
  contentAvatar: {

  },
  avatar: {

  },
  form: {
    marginTop: 50,
  },
  formGroup: {

  },
  labelInput: {

  },
  formButton: {

  },
  linearGradientButton: {
    width: screenWidth-60,
    borderRadius: 5
  },
  formButtonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  forgotPassword: {
    color: '#6E87FD',
    marginTop: 15,
    fontWeight: 'bold',
  },
  getStarted: {
    color: '#6E87FD',
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
    width: screenWidth,
    position: 'absolute',
    bottom: 30,
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialsIcon: {
    marginLeft: 10,
    marginRight: 10,
  }
})
