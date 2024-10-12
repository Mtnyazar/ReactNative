import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Loading from './src/components/Loading';
export default function App() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  return (
    <View style={styles.container}>
      <Image source={require('../Ders1/assets/images/LoginIcon.png')}
        style={styles.loginicon} />
      <Text style={styles.Text}>Email</Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <Text style={styles.Text}>Password</Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={setPassword}
        secureTextEntry
        keyboardType='number-pad'
      />

      <Pressable
        style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "lightgrey" : 'blue' }]}
        onPress={() => setLoading(true) + console.log("Save")}>

        <Text style={{ color: "white", fontSize: 22 }}>Save</Text>
      </Pressable>
      <Loading visible={loading} onClose={() => setLoading(false

      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 22,
    color: "red"
  },
  textInputStyle: {
    borderWidth: 1,
    width: "80%",
    height: 43,
    borderRadius: 9,
    marginVertical: 12,
    paddingHorizontal: 5,
    fontSize: 20,
    textAlign: "center"
  },
  button: {
    height: 50,
    width: "80%",
    borderWidth: 1,
    borderRadius: 9,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  loginicon: {
    width: 120,
    height: 120,
    marginBottom: 17
  }
});
