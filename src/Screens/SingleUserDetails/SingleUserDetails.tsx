import {View, Text, Image, StyleSheet,ScrollView,Platform,Alert,KeyboardAvoidingView} from 'react-native';
import React,{useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';
import { backbutton } from '../../Assets/Assets';
import ImagePicker from 'react-native-image-crop-picker';
import { requestCameraPermission } from '../../Permission';
import { cameraicon,singleuser } from '../../Assets/Assets';
// import { combineReducers } from '@reduxjs/toolkit';


interface INavigation{
  navigation:NavigationProp<any>
}

interface Ipermission{
 permissionStatus:any
}

const SingleUserDetails:React.FC<INavigation> = ({navigation}) => {
  const [state,setState]=useState()

    const [userDetails,setUserDetails]=useState({
                   name:'',
                   email:'',
                   phone:'',
                   address:'',
                   designation:'',
                   device:''
    })

          // const onSelectImg=async()=>{
       
          //   const PermissionStatus = await requestCameraPermission()
          //   if(PermissionStatus  || Platform.OS==='ios'){

          //       Alert.alert(
          //         'Profile picture',
          //         'Choose an option',
          //         [
          //           {
          //             text:'camera',onPress:onCamera
          //           },
          //           {
          //             text:'gallary',onPress:onGallary
          //           },
          //           {
          //             text:'cancle',onPress:()=>{}
          //           },
          //         ]
          //       )

          //   }

            
          // }
                
                                                                       
         const onSelect=()=>{
          Alert.alert(
            'Profile Picture',
            'Choose an Option',
            [
            { text:'Camera',onPress:onCamera },
            { text:'Gallary',onPress:onGallary},
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
          ]
          )          
         }
         const onCamera=()=>{
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            // setState(image.path)
          });
         }
         const onGallary=()=>{
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            // setState(image.path)
          });
         }
    
  return (
    <KeyboardAvoidingView style={styles.singleuserdetails} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>navigation.navigate('TotalEmployees')}
           style={{marginTop:10}}>
            <Image source={backbutton}/>
          </TouchableOpacity>
      <View style={styles.head1}>
        <Text
          style={{  textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: 'black', marginTop: 20,}}>
                  User Details
        </Text>

        <TouchableOpacity style={styles.singleuserimghead} onPress={onSelect}>
<View style={styles.imgborder}>
<Image source={singleuser} style={styles.singleuserimg} />

</View>
          <Image source={cameraicon}  style={styles.cameraicon} />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>

        
        <Text
          style={{ textAlign: 'center', fontFamily: 'serif', color: 'black', fontSize: 16, }}>
          Rajendra Kumar
        </Text>

        <Text
          style={{ textAlign: 'center', fontFamily: 'serif', color: 'black', fontSize: 11, marginTop: 7,}}>
          React-Native
        </Text>
      </View>

      <View style={{marginTop: 27}}>
        {/* <View> */}
          <TextInput style={[styles.inputname,{position:'relative'}]} />
        <Text style={styles.bordertextname}>Name</Text>
        {/* </View> */}

        <Text style={styles.bordertextemail}>Email</Text>
        <View style={styles.inputs}>
          <TextInput style={styles.inputname} />
        </View>
        <Text style={styles.bordertextphone}>Phone</Text>
        <View style={styles.inputs}>
          <TextInput style={styles.inputname} />
        </View>
        <Text style={styles.bordertextaddress}>Address</Text>
        <View style={styles.inputs}>
          <TextInput style={styles.inputname} />
        </View>
        <Text style={styles.bordertextdesignation}>Designation</Text>
        <View style={styles.inputs}>
          <TextInput style={styles.inputname} />
        </View>
        <Text style={styles.bordertextdesignation1}>Device</Text>
        <View style={styles.inputs}>
          <TextInput style={styles.inputname} />
        </View>
      </View>
      
 </ScrollView>
  
 <View style={styles.footer}>

 <TouchableOpacity style={styles.btn}
 activeOpacity={.6}
 >
     <Text style={styles.btntext}>Update Profile</Text>
</TouchableOpacity>
</View>

</KeyboardAvoidingView>
  );
};

export default SingleUserDetails;

const styles = StyleSheet.create({
  singleuserdetails: {
    flex: 1,
    backgroundColor: '#fff',
    elevation: 0,
  },

  head1: {
    width: '36%',
    alignSelf: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
  },
  backButton: {
    marginTop: 10,
  },

  singleuserimghead: {
    borderRadius: 100,
    // backgroundColor:'#FFFDFD',
    height: 145,
    width: '100%',
    marginHorizontal: 5,
    // borderColor: '#EAE5E5',
    // borderWidth: 3,
    alignSelf: 'center',
    marginTop: 20,
    position:'relative',
    // justifyContent:'center'
  },

  imgborder:{
    borderWidth:2,
    borderRadius: 100,
        width:'95%',
          height:'95%',
          justifyContent:'center',   
          borderColor:'#EAE5E5'    ,
          backgroundColor:'#FFFDFD',
          alignContent:'center',
          alignSelf:'center',      
  },
  
  cameraicon:{
    position:'absolute',
    marginTop:107,
    marginLeft:100
  },

  singleuserimg: {
    alignSelf: 'center',
    // borderRadius: 130,
  },

  details: {
    alignSelf: 'center',
    marginTop: 15,
  },

  name: {
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  designation: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    marginLeft: 10,
    textAlign: 'center',
    marginTop: 10,
  },

  inputs: {
    // flexDirection: 'row',
    marginVertical: 10,
    width: '90%',
    marginTop: 17,
    // paddingVertical: 6,
    // alignSelf: 'center',
    // elevation: 20,
    backgroundColor: '#fff',
    // borderRadius: 7,
    // borderWidth:1,
    borderColor: '#D7D1D1',
    // zIndex:.05,
    //    elevation:0
    // height:55
  },

  inputname: {
    height: 50,
    width: '100%',
    // zIndex: 0.5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D7D1D1',
    borderRadius: 7,
    paddingHorizontal: 10,

    //    height:'100%'
  },
  bordertextname: {
    position: 'absolute',
    top: -4,
    left:15,
    // marginHorizontal: 40,
    backgroundColor: '#fff',
    // zIndex: 1,
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  bordertextemail: {
    position: 'absolute',
    marginTop: 102,
    marginLeft:50,
    marginHorizontal: 40,
    backgroundColor: '#fff',
    zIndex: 1,
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  bordertextphone: {
    position: 'absolute',
    marginTop: 190,
    marginLeft:50,
    marginHorizontal: 40,
    backgroundColor: '#fff',
    zIndex: 1,
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  bordertextaddress: {
    position: 'absolute',
    marginTop: 280,
    marginLeft:50,
    marginHorizontal: 40,
    backgroundColor: '#fff',
    zIndex: 1,
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  bordertextdesignation: {
    position: 'absolute',
    marginTop: 369,
    marginLeft:50,
    marginHorizontal: 40,
    backgroundColor: '#fff',
    zIndex: 1,
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  bordertextdesignation1: {
    position: 'absolute',
    marginTop: 458,
    marginLeft:50,
    marginHorizontal: 40,
    backgroundColor: '#fff',
    zIndex: 1,
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 5,
  },

  btn:{
    width:'90%',
    // borderWidth:1,
    height:50,
    backgroundColor:'red',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:8
  },

    btntext:{
        color:'#fff',
        textAlign:'center',
         fontSize:17
    },
    
     footer:{
        height:80,
        backgroundColor:'#F1F1F3',
        justifyContent:'center'
     }

});
