import React from 'react';
import FlatCards from './components/FlatCards';
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import ElevatedCards from './components/ElevatedCards';
import MagicCard from './components/MagicCard'
import FancyCards from './components/FancyCards';
import ContactList from './components/ContactList';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards/>
          <MagicCard /> 
          <FancyCards/>
          <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default App;
