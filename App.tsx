import React from 'react';
import FlatCards from './components/FlatCards';
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import ElevatedCards from './components/ElevatedCards';
import MagicCard from './components/MagicCard'
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards/>
          <Image 
             source={require('./src/assets/nature.jpg')}
            //  resizeMode={'cover'}
             style={[styles.imageView ]}
          />
          <MagicCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
       imageView:{
           width:340,
           height:200,
           borderRadius:5,
           margin:15
       }
})

export default App;
