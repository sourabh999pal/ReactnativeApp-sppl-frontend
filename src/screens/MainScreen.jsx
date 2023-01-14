import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Avatar, IconButton, Card, Title, Paragraph } from 'react-native-paper';

import CardComponent from '../component/CardComponent';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';



const MainScreen = ({ navigation }) => {

const Logout = async()=>{
   AsyncStorage.clear();
   setTimeout(() => {
    navigation.navigate('Navigate');
  }, 1500);
}


  return (
    <ScrollView>
      <SafeAreaView>
        <View >
          
          <View style={styles.userbox}>
            <View style={styles.userboxbg}>
              <Icon name='user' size={32} color='black' />
            </View>
            <Text style={styles.user}>Hi, User! </Text>
          </View>

          <View style={{ position: 'relative', marginTop: '8%' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Service')}>
              <CardComponent heading='Service' para='For any Services and installation request' />
            </TouchableOpacity>
          </View>


          <View style={{ position: 'absolute', top: '36%' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
              <CardComponent heading='Product Information' para='For any Product Information' />
            </TouchableOpacity>
          </View>

         <View style={{ position: 'absolute', top: '63%',width:'30%',height:'5%', backgroundColor:'black',borderRadius:5,alignSelf:'center' }}>
          <TouchableOpacity onPress={Logout}>
          <Text style={{color:'white',fontSize:20,alignSelf:'center'}}>Logout user</Text>
          </TouchableOpacity>
         </View>



        </View>

      </SafeAreaView>
    </ScrollView>

  )
}

export default MainScreen

const styles = StyleSheet.create({
  user: {
    fontWeight: '400',
    fontSize: 20,
    color: '#878686',
    margin: '2%'
  },
  userbox: {

    flexDirection: 'row',
    height: '6%',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    marginVertical: '3%'
  },
  userboxbg: {
    width: '10%',
    backgroundColor: '#D9D9D9',
    paddingHorizontal: '2%',
    paddingVertical: '1%'
  }
})
