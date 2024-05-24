/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import LottieView from 'lottie-react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <LottieView
          style={styles.animation}
          resizeMode="contain"
          renderMode="HARDWARE"
          source={require('./animations/SplashScreen.json')}
          loop
          autoPlay
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blueviolet',
  },
  animation: {
    height: 500,
    width: 500,
  },
});

export default App;
