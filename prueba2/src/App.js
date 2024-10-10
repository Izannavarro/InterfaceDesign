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
  Text,
  View,
} from 'react-native';

import Partit from './components/partit/Partit';

/** A la funció App, dins del return crearem la nostra pantalla */
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}> Resultados Liga 24-25 </Text>
          <Image
            style={styles.image}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
        </View>

        {/* Partits */}
        <View style={styles.matchList}>
          <Partit e1="Valencia CF" e2="Betis" r1={5} r2={5} />
          <Partit e1="Osasuna" e2="Oviedo" r1={2} r2={1} />
          <Partit e1="Real Madrid" e2="Barcelona" r1={3} r2={2} />
          <Partit e1="Sevilla" e2="Atletico Madrid" r1={1} r2={1} />
          <Partit e1="Villarreal" e2="Real Sociedad" r1={0} r2={2} />
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
