import React from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state={
            storyTitle :'',writting:'',author:''
        }
    }
handleWriting = async() =>{
    var writes;
   db.collection("Writers").doc(this.state.storyTitle).get()
   .then((doc)=>{
      console.log(doc.data)
   })
}
 handleStory =()=>{
     if(this.state.storyTitle ==='' || this.state.author ==='' || this.state.writting ==='' ){
       Alert.alert(" Fill all information to ad your story")
     }
     if(this.state.storyTitle !='' || this.state.author !='' || this.state.writting !='' ){
        db.collection("Writers").add({
            'Author' : this.state.author,
            'StoryTitle':this.state.storyTitle,
            'Story':this.state.writting
         })
      }
   
 }

 render(){
     return(
         <View>
         <TextInput
         style={style.inputs}
         placeholder="Story Title"
         onChangeText={text=>{this.setState({storyTitle:text})}}
         value={this.state.storyTitle}
         />
    <TextInput
         style={style.inputs}
         placeholder="Author"
         onChangeText={text=>{this.setState({author:text})}}
         value={this.state.author}
         />
             <TextInput
         style={style.input2}
         placeholder="Write your stroy"
         onChangeText={text=>{this.setState({writting:text})}}
         value={this.state.writting}
         />
         <TouchableOpacity style={{backgroundColor:'red',width:80,justifyContent:'center',marginLeft:20}} onPress={async()=>{
 this.handleStory();
                this.setState({
                    storyTitle :'',writting:'',author:''
                })
             }
         }
         
><Text style={{color:'white',textAlign:'center'}}>Submit</Text></TouchableOpacity>
         </View>
     )
 }   
}
const style = StyleSheet.create({
  inputs:{
marginLeft:20,
width:140,
borderWidth:2,borderColor:'blue'
  },
  input2:{
    justifyContent:'center',
    width:400,
    height:200,
    borderWidth:2,borderColor:'red'
  }  
})