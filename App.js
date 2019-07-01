
import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View} from 'react-native';
import Main_screen from './src/Mainscreen'
import Job_openings from './src/Job_openings';
import Applied_positions from './src/Applied_positions';
import Candidate_details from './src/Candidate_details';
import Job_details from './src/Job_details';
import Job_openings from './src/Job_openings';
import List_of_candidates from './src/List_of_candidates';
import Candidate_Loginscreen from './src/Candidate_Loginscreen';
import Candidate_List from './php_list/Candidate_List';
import Candidate_Login_Check from './php_list/Candidate_Login_Check';
import CloseConnection from './php_list/CloseConnection';
import Create_Job from './php_list/Create_Job';
import CreateConnection from './php_list/CreateConnection';
import DBConfig from './php_list/DBConfig';
import HR_Login_Check from './php_list/HR_Login_Check';
import Job_List from './php_list/Job_List';




 class App extends Component {
  render() {
    return (
      <View>
        <AppNavigator/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
Main_screen:{
  screen:Main_screen,


  navigationOptions: () => ({
  title: 'Interview Management',
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
}),
},
Candidate_Loginscreen:{
  screen:Candidate_Loginscreen,
},
HR_Login_screen:{
  screen:HR_Login_screen,
},
List_of_candidates:{
  screen:List_of_candidates
},
Job_openings:{
  screen:Job_openings
},
Job_details:{
  screen:Job_details
},
Candidate_details:{
  screen:Candidate_details
},
Applied_positions:{
  screen:Applied_positions
},
Candidate_List:{
  screen:Candidate_List
},
Candidate_Login_Check:{
  screen:Candidate_Login_Check
},
CloseConnection:{
  screen:CloseConnection
},
Create_Job:{
  screen:Create_Job
},
CreateConnection:{
  screen:CreateConnection
},
DBConfig:{
  screen:DBConfig
},
HR_Login_Check:{
  screen:HR_Login_Check
},
Job_List:{
  screen:Job_List
}


});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});

export default createAppContainer(AppNavigator);
