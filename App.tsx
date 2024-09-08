import React from 'react';
import FlatCards from './components/FlatCards';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import ElevatedCards from './components/ElevatedCards';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
      
})

export default App;
