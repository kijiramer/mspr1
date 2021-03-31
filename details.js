import React from 'react';


import { SafeAreaView, StyleSheet, View, Text } from 'react-native';


import { Card } from 'react-native-elements';

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card title="Local Modules">
          <Text style={styles.paragraph}>
            Promotion
            ------------------------------
            (Du 31 mars au 15 Avril) 100 euro remboursé dès 300 euro d'achat
          </Text>
        </Card>
        <Card title="Local Modules">
          <Text style={styles.paragraph}>
            Promotion -15%
            --------------------------------
            ( 1 Avril au 15 Avril ) -15% Pour l'achat d'une paire de chaussure
          </Text>
        </Card>
        <Card title="Local Modules">
          <Text style={styles.paragraph}>
            Promotion 
            --------------------------------
            ( 1 Avril au 30 Avril ) 50 euro remboursé dès 150 euro d'achat
          </Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});