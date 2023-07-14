import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Image} from 'react-native'
import { NavigationProp } from '@react-navigation/native';


interface INavigation{
    navigation:NavigationProp<any>
}
 
const SignUp:React.FC<INavigation>=({navigation}) =>{

     const [show,setShow]=useState(false)
     const [hide,setHide]=useState(true)

      const showPassword=()=>{
                  
          setHide(true)

      } 
      const HideHandler=()=>{
        setHide(false)
        // setShow(false)
      }

  return (
    <View style={styles.container}>
    
        <Text style={styles.head1}>
            Sign Up
        </Text>

            <View style={styles.input}>
           
        <TextInput style={styles.email} placeholder='Name'/>    
            </View>

            <View style={styles.input}>
           
        <TextInput style={styles.email} placeholder='Email'/>    
            </View>

            <View style={styles.input}>
            <TextInput 
            secureTextEntry={hide}
            style={styles.password} placeholder='Password' />  
         
                </View>
        
                <TouchableOpacity style={styles.btn1}>
                
            <Text style={styles.btnsignin}
           onPress={()=>navigation.navigate('LogIn')}  >Sign Up </Text>
          </TouchableOpacity>

         
     
    </View>
  )
}

export default SignUp


const styles= StyleSheet.create({

    container:{
        // flex:2,S
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        // textAlign:'center'
        // flexDirection:'row',
        // backgroundColor:'green',
        height:'90%'   

    },

             


    head1:{
        color:'red',
         fontSize:30,
         marginBottom:20

         

    },

    inputs:{
       
    },

    img:{
            width:25,
            height:20,
 marginTop:15       ,
 marginLeft:10    ,
//  paddingHorizontal:0
    },

    img2:{
        width:25,
        height:20,
marginTop:15       ,
marginLeft:170   ,
//  paddingHorizontal:0
},

    input:{
        flexDirection:'row',
        marginVertical:10,
        width:'80%',
        marginTop:15,
        paddingVertical:6,
        
        // borderWidth: 2
        elevation:20,
        backgroundColor:'#fff',
            borderRadius:12
    },
    email:{
        // padding:15,
        width:'100%',
          paddingLeft:20
    },
    password:{ 
        // paddingLeft:10,
        width:'100%',
        paddingLeft:20

         
    },

    btn1:{
        backgroundColor:'red',
        borderColor:'pink',
        fontWeight:200,
        borderWidth:2,
        padding:15,
       
        marginTop:19,
        paddingHorizontal:22,
         
        borderRadius:13

    },

                                                          
    
    btnsignin:{
        color:'white',
        paddingHorizontal:8,
        
    },
    already:{
      fontSize:10,
      marginTop:15,
      color:'blue'
  }

})