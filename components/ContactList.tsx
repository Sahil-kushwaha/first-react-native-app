import {View, Text ,ScrollView ,StyleSheet ,Image} from 'react-native'

export default function ContactList() {
      const contacts =  [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];  

    return(
        <View style={styles.container}>
              <Text style={styles.headingTest}>ContactList</Text>
                <ScrollView
                  style={styles.container}
                  scrollEnabled={false} 
                >

                 {contacts.map(item=>(
                     <View key={item.uid} style={[styles.contactCard]}>
                            <Image
                                source={{uri:item.imageUrl}}
                                style={styles.contactImage}
                             />
                             <View>
                               <Text>{item.name}</Text>
                               <Text style={{color:'gray'}}>{item.status}</Text>
                             </View>
                       </View>
                 ))}
            
                </ScrollView>
          </View>
    )
}

const styles = StyleSheet.create({
        headingTest:{
             fontSize:24,
             fontWeight:'bold',
             margin:5
        },
        container:{
           flex:1,
        },
        contactCard:{
             flex:1,
             flexDirection:'row',
             margin:8,
             alignItems:'center',
             columnGap:18
        },
        contactImage:{
              width:70,
              height:70,
              borderRadius:70/2
        }
})