import React, { Component } from 'react';
import { Platform,Text, View,TouchableOpacity,Button,ScrollView } from 'react-native';

export default class Job_openings extends Component {
    static navigationOptions={
        title:"Openings of Jobs",
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
            isLoading:true,
            datasource:null
        }
    }

    componentDidMount(){
        let url="https://localhost/php_list/Job_List.php"
        return fetch(url)
        .then((response) => response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:false,
                datasource:responseJson
            })
        })
    }

  render() {
      const {navigate} = this.props.navigation;
      
    if(this.state.loading)
    {
    return (
      <View style={styles.container}> 
      </View>
    )
    }
    else{
     let job=this.state.datasource.map((val,key)=>{
         return <View key={key} style={styles.item}>
        <ScrollView style={styles.scrollContainer}>

        

         <View style={styles.messageBox}>
         <Text style={styles.messageBoxText}>{val.jobname}</Text>    
         <Text style={styles.messageBoxText}>{val.jobdescription}</Text> 
         
         </View> 

         <TouchableOpacity onPress={()=>this.props.navigation.navigate("Candidate_details")}>  
         <View style={styles.buttonContainer}>
        <Button
        title="Apply"
        color="#841584"/>
         </View>
        </TouchableOpacity> 

        </ScrollView>  
         </View>
     })
  return(
    <View style={styles.container}>

    {job}
    
    </View>  
  )
  }
}
}

  const styles=StyleSheet.create({
  container:{
   flex:1,
   padding:26,
   alignItems:"center",
   justifyContent:"center",
  },
  scrollContainer:{
      flex:1
  },
  messageBox:{
      backgroundColor:'#0000ff',
      width:300,
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:20,
      paddingRight:20,
      borderRadius:10,
      marginTop:5,
      marginBottom:5
  },

  messageBoxText:{
      backgroundColor:"#add8e6",
      flexDirection:'column',
      flexWrap:"wrap",
      padding:15
  },

  buttonContainer:{
      flexDirection:'column',
      margin:5,
      height:70,
      width:250,
      justifyContent:'center'
  },

  })

