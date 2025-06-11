// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  const [ticker, setTicker] = useState('');
  const [optionType, setOptionType] = useState<'BuyCall' | 'BuyPut' | 'SellCall' | 'SellPut'>('BuyCall');

  // Mock contract for now, replace later with real API call
  const mockContract = 'TSLA230621C00375000';

  const handlePick = () => {
    navigation.navigate('Result', {
      ticker: ticker || 'Random',
      optionType,
      contract: mockContract,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Options Oracle</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Ticker (e.g. TSLA)"
        placeholderTextColor="#aaa"
        value={ticker}
        onChangeText={setTicker}
      />

      <TouchableOpacity style={styles.randomBtn} onPress={() => setTicker('')}>
        <Text style={styles.btnText}>🎲 Pick a Random Stock</Text>
      </TouchableOpacity>

      <View style={styles.optionsContainer}>
        {['BuyCall', 'BuyPut', 'SellCall', 'SellPut'].map(type => (
          <TouchableOpacity
            key={type}
            style={[
              styles.optionBtn,
              optionType === type && styles.optionBtnSelected,
            ]}
            onPress={() => setOptionType(type as any)}
          >
            <Text style={styles.optionText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.showBtn} onPress={handlePick}>
        <Text style={styles.btnText}>🚀 Show Me the Contract</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
// styles unchanged (reuse from previous)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#00ffcc',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
    marginBottom: 16,
  },
  randomBtn: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  showBtn: {
    backgroundColor: '#00ffcc',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-around',
  },
  optionBtn: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 6,
    margin: 5,
    minWidth: '40%',
  },
  optionBtnSelected: {
    backgroundColor: '#00ffcc',
  },
  optionText: {
    color: '#fff',
    textAlign: 'center',
  },
});
