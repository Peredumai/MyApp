/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

interface GradientProps {
  text: string;
}

const Gradient = ({text}: GradientProps) => {
  return (
    <MaskedView
      style={{flex: 1, flexDirection: 'row', height: '100%'}}
      maskElement={
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              color: 'black',
              fontFamily: 'RobotoMono-Bold',
            }}>
            {text}
          </Text>
        </View>
      }>
      <View style={{flex: 1, height: '100%', backgroundColor: '#800080'}} />
      <View style={{flex: 1, height: '100%', backgroundColor: '#FF033E'}} />
      <View style={{flex: 1, height: '100%', backgroundColor: '#FF00FF'}} />
      <View style={{flex: 1, height: '100%', backgroundColor: '#FFFF00'}} />
    </MaskedView>
  );
};

export default Gradient;
