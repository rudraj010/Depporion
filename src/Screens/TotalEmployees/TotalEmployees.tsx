import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import { NavigationProp } from '@react-navigation/native';
import { users,backbutton} from '../../Assets/Assets';
import {useSelector,useDispatch} from 'react-redux'
import { fetchUser } from '../../Redux/UserSlice';
import { AppDispatch,RootState } from '../../Redux/Store';

interface INavigation {
  navigation: NavigationProp<any>;
}

interface IEmployeeData {
  id: number;
  name: string;
  email: string;
  designation: string;
  img: any;
}
 
 

const TotalEmployees: React.FC<INavigation> = ({ navigation }) => {

  const {loading,user,error} = useSelector((state: RootState) => state.user);
  // const loading = useSelector((state: RootState) => state.user.loading);
  // console.log(employeeData,'pppppppppp')
  // console.log(loading,'lollolololo')

 console.log(user,'qqqqqqqqqq')

  const dispatch =useDispatch<AppDispatch>()



  useEffect(()=>{
     dispatch(fetchUser())
  },[])


  const EmployeeData: IEmployeeData[] = [
    {
      id: 1,
      name: 'Rajendra Kumar',
      email: 'rajkumar023@gmail.com',
      designation: 'react-native',
      img: users,
    },
    {
      id: 2,
      name: 'Piyush Manglani',
      email: 'piyush123@gmail.com',
      designation: 'design',
      img: users,
     },
    {
      id: 3,
      name: 'Ajay Sharma',
      email: 'ajsharma023@gmail.com',
      designation: 'react.js',
      img: users,
     },
    {
      id: 4,
      name: 'Vijay Gupta',
      email: 'Vijay869sharma@gmail.com',
      designation: 'ror',
      img: users,
     },
    {
      id: 5,
      name: 'Vijay Gupta',
      email: 'Vijay5305@gmail.com',
      designation: 'ror',
      img: users,
     },
    {
      id: 6,
      name: 'Vijay Gupta',
      email: 'Vijaygupta@gmail.com',
      designation: 'ror',
      img: users,
     },
    {
      id: 7,
      name: 'Vijay Gupta',
      email: 'Vijay123@gmail.com',
      designation: 'ror',
      img: users,
     },
    {
      id: 8,
      name: 'Vijay Gupta',
      email: 'Vijay123@gmail.com',
      designation: 'ror',
      img: users,
     },
    {
      id: 9,
      name: 'Vijay Gupta',
      email: 'Vijay123@gmail.com',
      designation: 'ror',
      img: users,
     },
  ];




  const [data, setData] = useState<IEmployeeData[]>(EmployeeData);
  const [search, setSearch] = useState<string>('');

  const countries = ['All','React-Native', 'React.JS', 'Design', 'ROR'];

  const keys:Array<keyof IEmployeeData> = [ 'name', 'email', 'designation'];

  const handleSearch = (text: string) => {
    setSearch(text);
   const filterData= EmployeeData.filter((item)=>
   item.name.toLowerCase().includes(text.toLowerCase())
   )
   setData(filterData)
  };
  

  const handleSearchDesignation=(text:string)=>{
      if(text==='All'){
        setData(EmployeeData)
      }else{
        const selectFilter= EmployeeData.filter((item)=>{
            return item.designation.toLowerCase().includes(text.toLowerCase())
        })
        setData(selectFilter)
      }
           
  }

  return (
        <ScrollView>
      <View style={styles.employeedetails}>
        <View>
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>navigation.navigate('Home')}
           style={{marginTop:10}}>
            <Image source={backbutton}/>
          </TouchableOpacity>

        <View>
          <Text style={styles.employeedetailstext}>Employees Details</Text>

          <View style={styles.searchbox}>
            <TextInput
              placeholder="Search..."
              style={styles.input}
              onChangeText={handleSearch}
            />
          </View>

          <View style={styles.dropdown}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                handleSearchDesignation(selectedItem)
              }}
            />
                <TouchableOpacity 
                style={styles.add}
                 onPress={()=>navigation.navigate('AddMemeber')}
                >
                   <Text style={styles.addtext}>Add</Text>
                </TouchableOpacity>
          </View>
        </View>


        {data.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('SingleUserDetails',{id:item.id})}
              style={styles.touch}
              key={index}
            >
              <View style={styles.employeecard}>
                <View style={styles.userimghead}>
                  <Image source={item.img} style={styles.userimg} />
                </View>

                <View style={{ marginHorizontal: 15 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.email}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>

          );
        })}
    </View>

      </View>
      </ScrollView>
  );
};

export default TotalEmployees;

const styles = StyleSheet.create({
  employeedetails: {
    flex: 1,
    backgroundColor: '#fff',
  },
  employeedetailstext: {
    textAlign: 'center',
    fontSize: 22,
    color: 'red',
    fontFamily: 'serif',
    fontWeight: 'bold',
    // marginTop: 30,
  },
  touch: {
    // elevation:1,
    // backgroundColor:'#fff',
  
  },
  searchbox: {
    marginTop: 25,
    // backgroundColor: '#FCFAFA',
    elevation: 5,
    backgroundColor: '#fff',
    height: 50,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    // borderWidth:0.5
  },
  input: {
    padding: 10,
    width: '100%',
  },
  employeecard: {
    marginTop: 1,
    // backgroundColor: '#FCFAFA',
    height: 60,
    width: '90%',
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 13,
    borderWidth:0.2,
    borderColor:'black',
    // elevation: 20,
    backgroundColor: '#fff',
    // elevationTopWidth:20
    
  },
  name: {
    // fontFamily: 'serif',
    fontSize: 11,
    fontWeight: 'bold',
  },
  email: {
    fontFamily: 'serif',
    fontSize: 8,
  },
  userimghead: {
    borderRadius: 102,
    backgroundColor: '#fff',
    height: 50,
    width: '14%',
    marginHorizontal: 5,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userimg: {
    alignSelf: 'center',
    borderRadius: 130,
  },
  dropdown: {
    marginTop: 30,
    marginBottom: 30,
    width: '90%',
    alignSelf: 'center',
    justifyContent:'space-between',
    flexDirection:'row',
    
  },

   add:{
    textAlign:'center',
     backgroundColor:'red',
     height:50,
     paddingHorizontal:30,
    borderRadius:7, 
    justifyContent:'center',
   },
   addtext:{
     color:'#fff',
                                 
   }
   
});






// ImagePicker.openPicker({
//   cropping: true,
//   cropperToolbarTitle: 'Crop your image',
//   compressImageQuality: 0.8,
//   width: wp('50%'),
//   height: hp('30%'),
// }).then(galleryimage => {
//   console.log(galleryimage.path);
// });