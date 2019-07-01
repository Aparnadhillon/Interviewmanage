import React, { Component } from 'react';
import { TextField,TouchableOpacity,Button,View } from 'react-native-material-textfield';
 
export default class Job_details extends Component {
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
    jobname: '',
    jobdescription:'',
    hr_id:' '
  };
}


 InsertDataToServer = () =>{

  
 fetch('https://localhost/php_list/Create_job.php', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
  
     jobname: jobname,
  
     jobdescription: jobdescription,
     
     hr_id:hr_id
  
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
    let { jobname } = this.state;
    let {jobdescription} = this.state;
    let {hr_id} = this.state;
 
    return (
      <View style={styles.container}>

      <TextField
        label='Job name'
        value={jobname}
        onChangeText={ (jobname) => this.setState({ jobname }) }
      />

      <TextField
      label='Job Description'
      value={jobdescription}
      onChangeText={ (jobdescription) => this.setState({ jobdescription }) }
    />

      <TouchableOpacity onPress={()=>this.props.navigation.navigate(this.InsertDataToServer)}>
    <View style={styles.buttonContainer}>
        <Button
        title="Create "
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
