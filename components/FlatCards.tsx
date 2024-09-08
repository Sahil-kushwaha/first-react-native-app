import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'cyan',
  },
});

export default FlatCards;
