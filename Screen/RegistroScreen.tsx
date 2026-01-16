import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { db } from '../config/firebaseConfig';
import { ref, set } from 'firebase/database';

export default function RegistroScreen() {
  const [id, setId] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const registrar = () => {
    
    if (!id || !monto || !categoria || !descripcion) {
      if (Platform.OS === 'web') {
        window.alert('Error: Campos vacíos');
      } else {
        Alert.alert('Error', 'Campos vacíos');
      }
      return;
    }


    set(ref(db, 'recordatorios/' + id), {
      id: id,
      monto: monto,
      categoria: categoria,
      descripcion: descripcion
    })
    .then(() => {

      if (Platform.OS === 'web') {
        window.alert('Éxito: Registro guardado en Firebase');
      } else {
        Alert.alert('Éxito', 'Registro guardado en Firebase');
      }
      
      setId(''); 
      setMonto(''); 
      setCategoria(''); 
      setDescripcion('');
    })
    .catch(error => {
     
      if (Platform.OS === 'web') {
        window.alert('Error: ' + error.message);
      } else {
        Alert.alert('Error', error.message);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro </Text>
      
      <TextInput 
        placeholder="ID" 
        style={styles.input} 
        onChangeText={setId} 
        value={id} 
        keyboardType='numeric'
      />
      
      <TextInput 
        placeholder="Monto" 
        style={styles.input} 
        onChangeText={setMonto} 
        value={monto} 
        keyboardType='numeric'
      />
      
      <TextInput 
        placeholder="Categoría" 
        style={styles.input} 
        onChangeText={setCategoria} 
        value={categoria}
      />
      
      <TextInput 
        placeholder="Descripción" 
        style={styles.input} 
        onChangeText={setDescripcion} 
        value={descripcion}
      />
      
      <TouchableOpacity style={styles.button} onPress={registrar}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});