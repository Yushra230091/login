import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Alert, TouchableOpacity, StatusBar } from 'react-native';

const App = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="skyblue" barStyle="light-content" />
      <View style={styles.innerContainer}>
        <Text style={[styles.label, styles.boldLabel]}>Sign in</Text>
        <Text style={styles.label}>Email*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Text style={[styles.label, { marginTop: 20 }]}>Password*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.link}
          onPress={() => Alert.alert('Sign Up link pressed')}
        >
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Login button pressed')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "skyblue",
    width: '100%',
  },
  innerContainer: {
    marginBottom: 40,
    width: '80%',
    maxWidth: 300,
    backgroundColor: '#F0F8FF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  boldLabel: {
    marginLeft: 90,
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  link: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
  },
  linkText: {
    color: '#000',
    fontSize: 16,
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 80,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
