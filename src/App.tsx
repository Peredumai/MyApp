import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Avatar1 from '../assets/svg/avatar1.svg';
import Avatar2 from '../assets/svg/avatar2.svg';
import Avatar3 from '../assets/svg/avatar3.svg';
import Container from './Container';
import Gradient from './GradientText';

import {ANOTHER} from '@env';
import {SOME_KEY} from '@env';

console.log(ANOTHER);
console.log(SOME_KEY);
const App = () => {
  return (
    <Container>
      <SafeAreaView style={styles.main}>
        <Text style={styles.bold}>daniil</Text>
        <View style={styles.svgContainer}>
          <Avatar1 />
          <Avatar2 />
          <Avatar3 />
        </View>
        <Gradient text={'gradient text'} />
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bold: {
    fontSize: 40,
    fontFamily: 'RobotoMono-Bold',
  },
  svgContainer: {
    flexDirection: 'row',
  },
});

export default App;
