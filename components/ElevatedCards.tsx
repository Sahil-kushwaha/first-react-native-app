import React from "react";
import { Text ,View , ScrollView, StyleSheet} from "react-native";

function ElevatedCards(){
     return(
            <View>
                  <Text style={styles.headingText}>Elevated Cards</Text>
                  <ScrollView horizontal={true}>
                         <View style={styles.card}>
                              <Text>Tap</Text>
                         </View>
                         <View style={styles.card}>
                              <Text>at</Text>
                         </View>
                         <View style={styles.card}>
                              <Text>me</Text>
                         </View>
                         <View style={styles.card}>
                              <Text>to</Text>
                         </View>
                         <View style={styles.card}>
                              <Text>Scroll</Text>
                         </View>
                  </ScrollView>
            </View>
     )
};

const styles = StyleSheet.create({
            container:{
                  
            },
            headingText:{
                 fontSize:24,
                 fontWeight:'bold'
            },
            card:{
                 width:100,
                 height:100,
                 borderRadius:5,
                 backgroundColor:'orange',
                 flex:1,
                 justifyContent:'center',
                 alignItems:'center',
                 margin:6,
                 elevation:6,
            }

            
}) 

export default ElevatedCards