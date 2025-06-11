// src/screens/ResultScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

const ResultScreen = ({ route }: Props) => {
  const { ticker, optionType, contract } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Option Contract</Text>
      <Text style={styles.label}>Ticker:</Text>
      <Text style={styles.value}>{ticker}</Text>

      <Text style={styles.label}>Option Type:</Text>
      <Text style={styles.value}>{optionType}</Text>

      <Text style={styles.label}>Contract:</Text>
      <Text style={styles.value}>{contract}</Text>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#00ffcc',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    color: '#00ffcc',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  value: {
    color: '#fff',
    fontSize: 20,
    marginTop: 4,
  },
});
