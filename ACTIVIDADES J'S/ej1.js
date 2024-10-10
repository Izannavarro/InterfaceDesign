import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StatusBar, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [missatge, setMissatge] = useState("");

  const validarContrasenya = (valor) => {
    if(valor === "2dam"){
      setMissatge("La contrasenya es correcta!");
    } else{
      setMissatge("La contrasenya NO es correcta!");
    }
  }

  return (
    <View>
      <StatusBar />
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Image
          style={styles.image}
          source={{ uri: 'https://miro.medium.com/v2/resize:fit:900/1*lYx6VItvyWZZy2ZB2w-vuA.jpeg' }}
          />
          <Text style={styles.sectionText}>USUARIO:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUser}
            value={user}
            placeholder='Pon tu nombre de usuario aquí.'
          />
          <Text style={styles.sectionText}>CONTRASEÑA:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPwd}
            value={pwd}
            secureTextEntry={true} 
            placeholder='Pon tu contraseña aquí.'
          />
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => validarContrasenya(pwd)}
          />
          <Text style={styles.sectionText}>
            {"Hola " + user.toUpperCase()}
          </Text>
          <Text style={styles.sectionText}>
            {missatge}
          </Text>
        </View>
      </ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
  },
  image : {
    width: '100%',
    height: 150, 
    alignItems: 'center',
  },
  sectionText: {
    marginTop: 8,
    fontSize: 27,
    fontWeight: '400',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default App;
