import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import ElevatedCards from './ElevatedCards'

const FancyCards = () => {
  return (
    <View>
      <Text>Trending places</Text>
        <View>
             <Image />
        </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
     headingText:{
         fontWeight:'bold',
         fontSize:24
     },
     card:{

     },
     ElevatedCards:{

     }
})