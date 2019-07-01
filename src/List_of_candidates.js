import React, { Component } from 'react';
import { Platform,Text, View,TouchableOpacity,Button,ScrollView } from 'react-native';

export default class List_of_candidates extends Component {
    static navigationOptions={
        title:"List Of Candidates",
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
        let url="https://localhost/php_list/Candidate_List.php"
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
     let candidate=this.state.datasource.map((val,key)=>{
         return <View key={key} style={styles.item}>
        <ScrollView style={styles.scrollContainer}>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Create")}>

         <View style={styles.messageBox}>
         <Text style={styles.messageBoxText}>{val.name}</Text>    
         <Text style={styles.messageBoxText}>{val.age}</Text> 
         <Text style={styles.messageBoxText}>{val.experience}</Text> 
         <Text style={styles.messageBoxText}>{val.emailid}</Text> 
         </View>   

        </TouchableOpacity> 

        </ScrollView>  
         </View>
     })
  return(
    <View style={styles.container}>

    {candidate}
    
    <View style={styles.buttonContainer}>
    <Button
     title="Create Job"
     color="#841584"/>
     </View>
    
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

