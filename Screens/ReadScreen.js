import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class ReadScreen extends React.Component{


 render(){
     return(
    <View style={Styles.container}>
        <Text style={{fontSize:30,textAlign:'center'}}>Read a story</Text>
        </View>
    
        )
 }   
}
const Styles = StyleSheet.create({
   container:{
       flex:1,
   } 
})