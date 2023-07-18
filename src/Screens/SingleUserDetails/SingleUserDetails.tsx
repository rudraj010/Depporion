import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {requestCameraPermission} from '../../Permission';
import {cameraicon, singleuser, trash, backbutton} from '../../Assets/Assets';
import {deleteUser} from '../../Redux/UserSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../Redux/Store';

// import { combineReducers } from '@reduxjs/toolkit';

interface INavigation {
  navigation: NavigationProp<any>;
  route: RouteProp<Record<string, IUserParams>, string>;
}

interface IUserParams {
  id: number;
}

interface Ipermission {
  permissionStatus: any;
}

interface DeleteUser {
  id: number;
}

const SingleUserDetails: React.FC<INavigation> = ({navigation, route}) => {
  const [state, setState] = useState();

  const dispatch = useDispatch<AppDispatch>();

  const routes = route.params.id;
  console.log(routes, 'idddddd');

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    designation: '',
    device: '',
  });

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

  const onSelect = () => {
    Alert.alert('Profile Picture', 'Choose an Option', [
      {text: 'Camera', onPress: onCamera},
      {text: 'Gallary', onPress: onGallary},
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  };
  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      // setState(image.path)
    });
  };
  const onGallary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      // setState(image.path)
    });
  };

  const all = () => {
    const deleteUserPayload: DeleteUser = {
      id: routes,
    };

    dispatch(deleteUser(deleteUserPayload));

    navigation.navigate('TotalEmployees');
  };

  const removeUser = () => {
    // const del ={id:routes}

    Alert.alert('Are you sure you want to delete', '', [
      {text: 'delete', onPress: all},
      {text: 'cancle', onPress: () => {}},
    ]);
  };

  return (
    <View style={styles.singleuserdetails}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 8,
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('TotalEmployees')}
          style={{marginTop: 10}}>
          <Image source={backbutton} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={removeUser}
          style={{marginTop: 10}}>
          <Image source={trash} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.head1}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 20,
            }}>
            User Details
          </Text>
        </View>

        <TouchableOpacity style={styles.singleuserimghead} onPress={onSelect}>
          <View style={styles.imgborder}>
            <Image source={singleuser} style={styles.singleuserimg} />
          </View>
          <Image source={cameraicon} style={styles.cameraicon} />
        </TouchableOpacity>
        <View style={styles.details}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'serif',
              color: 'black',
              fontSize: 16,
            }}>
            Rajendra Kumar
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'serif',
              color: 'black',
              fontSize: 11,
              marginTop: 7,
            }}>
            React-Native
          </Text>
        </View>

        <View style={{marginTop: 27}}>
          <Text style={styles.bordertextname}>Name</Text>
          <View style={styles.inputs}>
            <TextInput style={styles.inputname} />
          </View>

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
        <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
          <Text style={styles.btntext}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    width: '35%',
    alignSelf: 'center',
  },

  singleuserimghead: {
    // borderRadius: 100,
    // backgroundColor: '#F2EDE8',
    height: 145,
    width: '35%',
    // marginHorizontal: 5,
    // borderColor: '#F0C8F4',
    // borderWidth: 3,
    alignSelf: 'center',
    // marginTop: 10,
    position: 'relative',
    // justifyContent:'center'
    marginBottom: 20,
  },
  cameraicon: {
    position: 'absolute',
    marginTop: 107,
    marginLeft: 100,
  },

  imgborder: {
    borderWidth: 2,
    borderRadius: 100,
    width: '100%',
    height: 142,
    justifyContent: 'center',
    borderColor: '#EAE5E5',
    backgroundColor: '#FFFDFD',
    alignContent: 'center',
    alignSelf: 'center',
  },

  singleuserimg: {
    alignSelf: 'center',
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    // borderRadius:130,
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
    flexDirection: 'row',
    marginVertical: 10,
    width: '90%',
    marginTop: 17,
    paddingVertical: 6,
    alignSelf: 'center',
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
    zIndex: 0.5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D7D1D1',
    borderRadius: 7,
    paddingHorizontal: 10,

    //    height:'100%'
  },
  bordertextname: {
    position: 'absolute',
    marginTop: 12,
    marginLeft: 50,
    marginHorizontal: 40,
    backgroundColor: '#fff',
    zIndex: 1,
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  bordertextemail: {
    position: 'absolute',
    marginTop: 102,
    marginLeft: 50,
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
    marginLeft: 50,
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
    marginLeft: 50,
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
    marginLeft: 50,
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
    marginLeft: 50,
    marginHorizontal: 40,
    backgroundColor: '#fff',
    zIndex: 1,
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 5,
  },

  btn: {
    width: '90%',
    // borderWidth:1,
    height: 50,
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  btntext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
  },

  footer: {
    height: 80,
    backgroundColor: '#F1F1F3',
    justifyContent: 'center',
  },
});
