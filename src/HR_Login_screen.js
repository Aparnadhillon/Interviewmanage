import React, { Component } from 'react';
import { TextField,TouchableOpacity,Button,View } from 'react-native-material-textfield';
 
export default class HR_Login_screen extends Component {
  static navigationOptions={
    title:" HR Login Screen",
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
  this.state = {
    username: '',
    password:''
  };
}


 InsertDataToServer = () =>{

  
 fetch('https://localhost/php_list/HR_Login_Check.php', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
  
     username: username,
  
     password: password,
  
   })
  
 }).then((response) => response.json())
       .then((responseJson) => {
  
 // Showing response message coming from server after inserting records.
         Alert.alert(responseJson);
  
       }).catch((error) => {
         console.error(error);
       });
  
  
   }
 
  render() {
    const {navigate} = this.props.navigation;
    let { username } = this.state;
    let {password} = this.state;
 
    return (
      <View style={styles.container}>

      <TextField
        label='Username'
        value={username}
        onChangeText={ (username) => this.setState({ username }) }
      />

      <TextField
      label='password'
      value={password}
      onChangeText={ (password) => this.setState({ password }) }
    />
      <TouchableOpacity onPress={()=>this.props.navigation.navigate(this.InsertDataToServer)}>
    <View style={styles.buttonContainer}>
        <Button
        title="Submit"
        color="#841584"/>
    </View>
  </TouchableOpacity>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate("List_of_candidates")}>
    <View style={styles.buttonContainer}>
        <Button
        title="Login"
        color="#841584"/>
    </View>
  </TouchableOpacity>

  </View>
      
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
    buttonContainer:{
        flexDirection:'column',
        margin:5,
        height:70,
        width:250,
        justifyContent:'center'
    },

})
