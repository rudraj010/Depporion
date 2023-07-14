import React, {useState} from 'react';
import { Alert } from 'react-native';
import {StyleSheet,Text,TextInput,TouchableOpacity,View,Image,ScrollView} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { AddUser } from '../../Redux/UserSlice';
import { AppDispatch } from '../../Redux/Store';
import { NavigationProp } from '@react-navigation/native';
import { backbutton } from '../../Assets/Assets';
import { cameraicon,singleuser } from '../../Assets/Assets';
import ImagePicker from 'react-native-image-crop-picker';



interface User {
  name: string;
  // img:any;
  EmployeeId: string;
  PhoneNumber: string;
  Email: string;
  Address: string;
  DeviceName: string;
  DeviceMemory: string;
  DeviceProcessor: string;
  DiskCapacity: string;
}

interface INavigation{
  navigation:NavigationProp<any>
}

const AddMember:React.FC<INavigation>=({navigation})=>{
const dispatch =useDispatch<AppDispatch>()
const select =useSelector((state:any)=>state.reducer)
     
                                                 

    const [userValue,setUserValue]=useState<User>({
       name:'',
      //  img:'',
       EmployeeId:'',
       PhoneNumber:'',
       Email:'',
       Address:'',
       DeviceName:'',
       DeviceMemory:'',
       DeviceProcessor:'',
       DiskCapacity:''
    })

    // console.log(select,'ooooo') 

    const handleInputChange = (key: keyof User, value: string) => {
      setUserValue((prevUser) => ({ ...prevUser, [key]: value }));
      // console.log(userValue,'ppp')
      
    };
  
    const handleSubmit = () => {
       
      setUserValue({
        name: '',
        // img:'',
        EmployeeId: '',
        PhoneNumber: '',
        Email: '',
        Address: '',
        DeviceName: '',
        DeviceMemory: '',
        DeviceProcessor: '',
        DiskCapacity: '',
      });
      // const payload = {
      //   user: userValue
      
      // };
      //  dispatch(AddUser(payload))
      dispatch(AddUser(userValue));
    };



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
        // console.log(image);
        // setState(image.path)
       setUserValue((prev)=>({...prev,img:image.path}))

      });
     }
     const onGallary=()=>{
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        // console.log(image);
        // setState(image.path)
      //  setUserValue((prev)=>({...prev,img:image.path}))
        // console.log(userValue.img,'pppppppp')
      });
     }


  return (
    
         <ScrollView>
    <View style={{backgroundColor:'#fff'}}>

         <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>navigation.navigate('TotalEmployees')}
           style={{marginTop:10}}>
            <Image source={backbutton}/>
          </TouchableOpacity>
       
        <View style={styles.container}>
    
      <Text style={styles.head1}>Add Member</Text>

      <TouchableOpacity style={styles.singleuserimghead} onPress={onSelect}>
        <View style={styles.imgborder}>
          
            {/* {
              userValue.img ?<Image source= { {uri: userValue.img} }  style={styles.singleuserimg}/>:
               <Image source={singleuser} 
                style={{alignSelf:'center',width:80,height:80}}
               />
          }
           */}
           
        </View>
          <Image source={cameraicon}  style={styles.cameraicon} />
        </TouchableOpacity>
      
      
      <View style={styles.input}>
        <TextInput style={styles.email} placeholder="Name"  
         value={userValue.name}  
          onChangeText={(value) => handleInputChange('name', value)}
        />
      </View>

      <View style={styles.input}>
        <TextInput style={styles.email} placeholder="Employee Id" 
         value={userValue.EmployeeId}   
         onChangeText={(value) => handleInputChange('EmployeeId', value)}
         />
      </View>

      <View style={styles.input}>
        <TextInput
         style={styles.email} 
         placeholder="Phone Number" 
         value={userValue.PhoneNumber}  
         onChangeText={(value) => handleInputChange('PhoneNumber', value)}   /> 
             </View>

      <View style={styles.input}>
        <TextInput
         style={styles.email} 
         placeholder="Email"
         value={userValue.Email}  
           onChangeText={(value) => handleInputChange('Email', value)}
         />
        </View>

      <View style={styles.input}>
        <TextInput
         style={styles.email} 
         placeholder="Address..." 
         value={userValue.Address}   
         onChangeText={(value) => handleInputChange('Address', value)}/>
        </View>

      <View style={styles.input}>
        <TextInput
         style={styles.email} 
         placeholder="Device Name" 
         value={userValue.DeviceName}   
         onChangeText={(value) => handleInputChange('DeviceName', value)}/>
        </View>

      <View style={styles.input}>
        <TextInput
         style={styles.email} 
         placeholder="Device Memory" 
         value={userValue.DeviceMemory}  
         onChangeText={(value) => handleInputChange('DeviceMemory', value)}/>
        </View>

      <View style={styles.input}>
        <TextInput
         style={styles.email} 
         placeholder="Device Processor"
         value={userValue.DeviceProcessor}  
         onChangeText={(value) => handleInputChange('DeviceProcessor', value)}/>
        </View>

      <View style={styles.input}>
        <TextInput
         style={styles.email} 
         placeholder="Disk Capacity"
         value={userValue.DiskCapacity}   
         onChangeText={(value) => handleInputChange('DiskCapacity', value)}/>
        </View>

       

       <TouchableOpacity style={styles.btn1}>
                
            <Text style={styles.btnsignin}
           onPress={handleSubmit}> Submit </Text>
          </TouchableOpacity>  
    </View>
    </View>
    </ScrollView>
  );
}

export default AddMember;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // flex:2,S
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    // textAlign:'center'
    // flexDirection:'row',
    // backgroundColor:'green',
    // height:'90%'
    // marginTop: 20,
    height:'100%'
  },

  head1: {
    color: 'red',
    fontSize: 25,
    marginBottom: 20,
    // marginTop: 10,
    fontFamily:'serif',
   fontWeight:'bold'
  },

  singleuserimghead: {
    // borderRadius: 100,
    // backgroundColor: '#F2EDE8',
    height: 140,
    width: '35%',
    // marginHorizontal: 5,
    // borderColor: '#F0C8F4',
    // borderWidth: 3,
    alignSelf: 'center',
    // marginTop: 10,
    position:'relative',
    // justifyContent:'center'
    marginBottom:20
  },
  cameraicon:{
    position:'absolute',
    marginTop:107,
    marginLeft:100
  },
 
   

  imgborder:{
    borderWidth:2,
    borderRadius: 100,
        width:'100%',
          height:142,
          justifyContent:'center',   
          borderColor:'#EAE5E5'    ,
          backgroundColor:'#FFFDFD',
          alignContent:'center',
          alignSelf:'center',
          
  },

  singleuserimg: {
    alignSelf: 'center',
    height:'95%',
    width:'95%',
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'red',
    borderRadius:130,
    
    
  },

  

  img: {
    width: 25,
    height: 20,
    marginTop: 15,
    marginLeft: 10,
    //  paddingHorizontal:0
  },

  img2: {
    width: 25,
    height: 20,
    marginTop: 15,
    marginLeft: 170,
    //  paddingHorizontal:0
  },

  input: {
    flexDirection: 'row',
    marginVertical: 10,
    width: '80%',
    marginTop: 10,
    paddingVertical: 6,

    // borderWidth: 2
    elevation: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  email: {
    // padding:15,
    width: '100%',
    paddingLeft: 20,
  },
  password: {
    // paddingLeft:10,
    width: '100%',
    paddingLeft: 20,
  },

  btn1: {
    backgroundColor: 'red',
    borderColor: 'pink',
    fontWeight: 200,
    borderWidth: 2,
    padding: 15,

    marginTop: 19,
    paddingHorizontal: 22,

    borderRadius: 13,
  },

  btnsignin: {
    color: 'white',
    paddingHorizontal: 8,
  },
  already: {
    fontSize: 10,
    marginTop: 15,
    color: 'blue',
  },
});

