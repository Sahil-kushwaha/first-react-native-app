import {View ,Text ,Image ,StyleSheet} from 'react-native'

function MagicCard(){
      return(
       <View>
           <Image 
             source={require('../src/assets/nature.jpg')}
            //  resizeMode={'cover'}
             style={[styles.imageView ]}
          />
       </View>        
      )
}

const styles = StyleSheet.create({
      imageView:{
          width:340,
          height:200,
          borderRadius:5,
          margin:15
      }
})

export default MagicCard