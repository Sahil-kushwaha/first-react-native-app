import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ElevatedCards from './ElevatedCards';

const FancyCards = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>MY place</Text>
      <View style={[styles.card, styles.ElevatedCards]}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/105535539?v=4',
            width: 340,
            height: 200,
          }}
          style={styles.imageView}
        />
      </View>
      <View>
        <Text numberOfLines={2}>
          I am eager to learn new technologies.I have a foundation in
          programming, languages including C++, JavaScript,TypeScript,along with
          full stack development skill
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() => openWebsite('https://github.com/Sahil-kushwaha')}>
          <Text style={styles.link}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  card: {
    borderRadius:12,
    margin: 5,
  },
  ElevatedCards: {
    elevation: 6,
  },
  imageView:{
    borderRadius:12,
    margin:5,
    resizeMode:'cover'
 },
  footerContainer:{
     marginBottom:5,
     flex:1,
     flexDirection:"row",
     justifyContent:'center'

  },

  link:{
     color:'black',
     backgroundColor:'white',
     paddingHorizontal:6,
     paddingVertical:3,
     margin:5

  }
});
