import React, { Component } from 'react';
import { Platform,Text, View,TouchableOpacity,Button,ScrollView } from 'react-native';

export default class Main_screen extends Component {
    static navigationOptions={
        title:"Interview Management",
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:"bold",
          textAlign:"center",
          flex:1
        },
        titleStyle:{
          fontFamily:'American Typewriter'
        },
        headerStyle:{
          backgroundColor:"#0000ff"
        }
    }

    constructor(props){
        super(props);
    }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>

      <TouchableOpacity onPress={()=>this.props.navigation.navigate("HR_Loginscreen")}>
        <View style={styles.buttonContainer}>
            <Button
            title="HR"
            color="#841584"/>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Candidate_Loginscreen")}>
        <View style={styles.buttonContainer}>
            <Button
            title="Candidate"
            color="#841584"/>
        </View>
      </TouchableOpacity>

      </View>
      </ScrollView>
    );
  }
}

  const styles=StyleSheet.create({
  container:{
   flex:1,
   padding:26,
   alignItems:"center",
   justifyContent:"center",
   marginTop:20,
   marginBottom:20
   
  },
  scrollContainer:{
      flex:1
  },

  buttonContainer:{
      flexDirection:'column',
      margin:5,
      height:70,
      width:250,
      justifyContent:'center'
  },

  })

