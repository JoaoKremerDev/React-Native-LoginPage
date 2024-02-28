import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'


import { styles } from './styles'

const App = () => {
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const handleForgetButton = () => {

  }

  const handleSignUpButton = () => {

  }

  const handleLoginButton = () => {
    alert(`Olá! Você entrou com o email: ${emailField} e a sua senha é: ${passwordField}`);
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />

        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="********"
            secureTextEntry
            value={passwordField}
            placeholderTextColor='#999'
            onChangeText={t => setPasswordField(t)}
          />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgetButton}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Criado por João Kremer</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default App;