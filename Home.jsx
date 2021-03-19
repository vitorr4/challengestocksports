import React, {useState} from 'react';
import type {Node} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home: () => Node = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#1947e6',
      }}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          color: '#fff',
        }}>
        StockSports.
      </Text>
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={{
            color: '#1947e6',
            backgroundColor: '#fff',
            padding: 10,
            width: 200,
            fontSize: 20,
            textAlign: 'center',
          }}>
          Prosseguir
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
