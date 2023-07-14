import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper';

export default function DeviceDetails() {

    const data = [
        {
          deviceHolder:'John',
          modal:'AS235',
          EmployeeId:'2325',
          ram:'8GB',
          capacity:'512GB',
          status:'In Work'
        },
        {
          deviceHolder:'John',
          modal:'AS235',
          EmployeeId:'2325',
          ram:'8GB',
          capacity:'512GB',
          status:'In Work'
        },
        {
          deviceHolder:'John',
          EmployeeId:'2325',
          modal:'AS235',
          ram:'8GB',
          capacity:'512GB',
          status:'In Work'
        },
        {
          deviceHolder:'John',
          EmployeeId:'2325',
          modal:'AS235',
          ram:'8GB',
          capacity:'512GB',
          status:'In Work'
        },
       
        
      ];
                                 
  return (
    <View>
        <View style={{marginTop:20}}> 
            <Text 
            style={{textAlign:'center',color:'black',fontSize:20}}>Device Details</Text>
        </View>
       <DataTable style={{marginTop:20}}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Holder</DataTable.Title>
          <DataTable.Title>Emp Id</DataTable.Title>
          <DataTable.Title>Modal</DataTable.Title>
          <DataTable.Title >Ram</DataTable.Title>
          <DataTable.Title >Status</DataTable.Title>
        </DataTable.Header>

        {data.map((item, index) => (
          <DataTable.Row key={index} style={styles.row}>
            <DataTable.Cell>{item.deviceHolder}</DataTable.Cell>
            <DataTable.Cell>{item.EmployeeId}</DataTable.Cell>
            <DataTable.Cell>{item.modal}</DataTable.Cell>
            <DataTable.Cell>{item.ram}</DataTable.Cell>
            <DataTable.Cell>{item.status}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //  padding: 16,
      backgroundColor: 'yellow',
    //   marginTop:10, 
      
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
      },

    row: {
        backgroundColor: '#fff',
      },
   
    
  });