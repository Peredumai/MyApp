import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Avatar1 from './assets/svg/avatar1.svg';
import Avatar2 from './assets/svg/avatar2.svg';
import Avatar3 from './assets/svg/avatar3.svg';

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.bold}>daniil</Text>
      <View style={styles.svgContainer}>
        <Avatar1 />
        <Avatar2 />
        <Avatar3 />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
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
