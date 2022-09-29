import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const emailAddress = "hello@gmail.com";
    const PWS = "12345";
    if (!(password && email)) {
      setError('Username or Password should not be empty. Please try again.');
    } else if ((password !== PWS || email !== emailAddress)) {
      setError('Incorrect username or password. Please try again.');
    } else if (!emailValid.test(email)) {
      setError('Email is invalid. Please try again.');
    } else {
      navigation.navigate('Todo');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGIN FORM</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={email}
          name="email"
          placeholder="Email your email..."
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          name="password"
          placeholder="Enter your password..."
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FBC8F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#F0FFFF',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    color: 'black',
  },
  inputText: {
    height: 50,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#556B2F',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  error: {
    color: 'red',
  },
});

export default Login;
