import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
      <Text>Login</Text>
      //   <View style={styles.container}> 
      //       <Text style={styles.title}>Register Form</Text>
      //       <TextInput
      //           value={this.state.email}
      //           onChangeText={(email) => this.setState({ email })}
      //           placeholder={'Email'}
      //           name="email"
      //           style={styles.input}
                
      //       />
      //       <TextInput
      //           value={this.state.password}
      //           onChangeText={(password) => this.setState({ password })}
      //           placeholder={'Password'}
      //           secureTextEntry={true}
      //           style={styles.input}
      //       />

      //       <TextInput
      //           value={this.state.confirm_password}
      //           onChangeText={(confirm_password) => this.setState({ confirm_password })}
      //           placeholder={'Confirm_Password'}
      //           secureTextEntry={true}
      //           style={styles.input}
      //       />
      //       <TouchableOpacity style={styles.button} onPress={(evt) => this.onClickRegister(evt)}>
      //           <Text>Register</Text>
      //       </TouchableOpacity>
      //  </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
   button: {
      backgroundColor: 'red',
    },
  input: {
    width: 350,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 20,
  },
  title: {
    paddingBottom: 20,
    fontSize: 25,
    color: 'blue',
    
   }

});

export default Login;