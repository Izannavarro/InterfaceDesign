/**
 * Exemple d'una App amb React Native
 *
 * @author Manel Viel
 * @version 1.0  [octubre 2024]
 * @summary Aquest model el podeu utilitzar en els vostres projectes de DIN
 */

/** IMPORTEM les llibreries necessàries */
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {Provider as PaperProvider, Text} from 'react-native-paper';

import Partit from './src/components/partit/Partit';

const nom = (textAMostrar) =>{
  return <Text>{textAMostrar}</Text>
}


/** A la funció App, dins del return crearem la nostra pantalla */
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView>
        <View style={styles.header}>
         <PaperProvider>
          {nom()}
         </PaperProvider>
        </View>
      </ScrollView>
    </View>
  );
};

/** Estils a aplicar als components */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  image: {
    width: 100,
    height: 100,
  },
  matchList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});

export default App;
