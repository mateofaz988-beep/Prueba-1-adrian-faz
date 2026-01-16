import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, StatusBar } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
 
  const imagenFondo = "https://i.pinimg.com/originals/2e/c6/b5/2ec6b5e14fe0cba0cb0aa5d2caeeccc6.jpg"; 

  return (
    <ImageBackground 
      source={{ uri: imagenFondo }} 
      style={styles.background} 
      resizeMode="cover"
    >
      
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
      
      <View style={styles.overlay}>
        
        {/* Cabecera con Título y Subtítulo */}
        <View style={styles.header}>
          <Text style={styles.titulo}>ADRIAN FAZ</Text>
          <View style={styles.lineaDecorativa} />
          <Text style={styles.subtitulo}>PRUEBA 1</Text>
        </View>

   

    
        <View style={styles.botonesContainer}>
          <TouchableOpacity 
            style={styles.botonPrincipal} 
            onPress={() => navigation.replace('HomeTabs')}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBoton}>INGRESAR AL SISTEMA</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'space-between',
    paddingVertical: 80,
    paddingHorizontal: 25
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff', 
    letterSpacing: 3,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  lineaDecorativa: {
    width: 100,
    height: 3,
    backgroundColor: '#007AFF', // Azul para contrastar
    marginVertical: 15,
  },
  subtitulo: {
    color: '#f0f0f0',
    fontSize: 18,
    letterSpacing: 5,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    tintColor: '#fff', // Hace que el ícono del auto sea blanco para que resalte
  },
  botonesContainer: {
    marginBottom: 20
  },
  botonPrincipal: {
    backgroundColor: '#007AFF', // Azul vibrante
    paddingVertical: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#005bb5',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});