import React from 'react';
import { View, StyleSheet,Text,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { totalusers,totaldevices } from '../../Assets/Assets';
 
import { CountUp } from 'use-count-up'

interface INavigation {
    navigation: NavigationProp<any>;
  }


  const Home: React.FC<INavigation> = ({ navigation }) =>{
 
    // <Animatable.Text animation="fadeInRightBig" iterationCount={5} direction="alternate">
      
       
      
    //   </Animatable.Text> 

     
 
  return (
     <View style={styles.home}>

<View style={styles.welcometexthead}>
    <Text style={styles.welcometext}> Deeporion</Text>
   </View>

    <TouchableOpacity onPress={()=>navigation.navigate('TotalEmployees')}>
    <View style={styles.employeecard}>
     <Text style={styles.employeetext}>Total Employees</Text>
<Text style={styles.textcount}>
  <Image source={totalusers} />
      <CountUp isCounting end={100} duration={2} /> +
</Text>
    </View>
    </TouchableOpacity>

    <View style={styles.devicecard}>
     <Text style={styles.devicetext}>Total Devices</Text>
<Text style={styles.textcount}>
  <Image source={totaldevices}/>
      <CountUp isCounting end={100} duration={2} /> +
</Text>
    </View>

   

     </View>
  );
}


export default Home

const styles = StyleSheet.create({

  home:{
    flex:1,
    backgroundColor:'#000000'
  },
  welcometexthead:{
    marginTop:15
  },
  welcometext:{
    textAlign:'center',
    color:'#fff',
    fontSize:30,
    fontFamily:'serif',
    fontWeight:'bold'
},
employeecard:{ 
  width:'80%',
  height:150,
  marginTop:50,
  backgroundColor:'#febf4c',
  alignItems:'center',
  alignSelf:'center',
  borderRadius:12,   
  
},
employeetext:{
  marginTop:12,
  color:'black',
  fontSize:20,
  fontFamily:'serif',
  fontWeight:'bold',  
},
textcount:{
  color:'#fff',
  fontWeight:'600',
  fontSize:40,
  // marginTop:10

},
devicecard:{ 
  width:'80%',
  height:150,
  marginTop:50,
  backgroundColor:'#30775f',
  alignItems:'center',
  alignSelf:'center',
  borderRadius:12,   
},
devicetext:{
  marginTop:12,
  color:'#fff',
  fontSize:20,
  fontFamily:'serif',
  fontWeight:'bold',  
},

 
  });