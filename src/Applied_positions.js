import React, { Component } from 'react';
import { Platform,Text, View,TouchableOpacity,Button,ScrollView } from 'react-native';

export default class Applied_positions extends Component {
    static navigationOptions={
        title:"Positions applied",
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
        this.state={
            job:this.props.navigation.state.params.job,
            appliedjob:" "
        }
    }

    display=(arg)=>{
        let applied=this.state.appliedjob
        arg=arg+applied
        this.setState({
            appliedjob:arg
        })
    }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>

      <Text>{this.state.appliedjob}</Text>

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

