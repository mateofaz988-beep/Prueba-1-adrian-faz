import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>Adrian Faz</Text>
      
      {/* Texto más pequeño */}
      <Text style={styles.subtitle}>PRUEBA 1</Text>

      {/* ÍCONO DE AUTO (Car Icon) */}
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png' }} 
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.replace('HomeTabs')}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 5, 
  },
  subtitle: {
    fontSize: 20, 
    fontWeight: '600',
    color: '#555', 
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
  },
});