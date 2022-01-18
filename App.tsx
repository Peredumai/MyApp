import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.bold}>daniil</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontSize: 40,
    fontFamily: 'RobotoMono-Bold',
  },
});

export default App;
