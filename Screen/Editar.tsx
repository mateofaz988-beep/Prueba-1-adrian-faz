import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../config/firebaseConfig';
import { ref, update, remove, get, child } from 'firebase/database';

export default function EditarScreen() {
  const [idBuscar, setIdBuscar] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [encontrado, setEncontrado] = useState(false);


  const buscar = () => {
    const dbRef = ref(db);
    get(child(dbRef, `recordatorios/${idBuscar}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const datos = snapshot.val();
        setMonto(datos.monto);
        setCategoria(datos.categoria);
        setDescripcion(datos.descripcion);
        setEncontrado(true);
      } else {
        Alert.alert('Error', 'ID no encontrado');
        setEncontrado(false);
        limpiarCampos();
      }
    });
  };

 
  const editar = () => {
    if (!encontrado) return;
    
    update(ref(db, `recordatorios/${idBuscar}`), {
      monto: monto,
      categoria: categoria,
      descripcion: descripcion
    })
    .then(() => Alert.alert('Éxito', 'Registro actualizado'))
    .catch((error) => Alert.alert('Error', error.message));
  };

  
  const eliminar = () => {
    if (!encontrado) return;

    Alert.alert(
      'Eliminar',
      '¿Seguro que deseas eliminarlo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar', 
          style: 'destructive',
          onPress: () => {
            remove(ref(db, `recordatorios/${idBuscar}`))
            .then(() => {
              Alert.alert('Éxito', 'Eliminado correctamente');
              limpiarCampos();
              setEncontrado(false);
            });
          }
        }
      ]
    );
  };








  const limpiarCampos = () => {
    setMonto('');
    setCategoria('');
    setDescripcion('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar / Eliminar</Text>

      <View style={styles.searchSection}>
        <TextInput
          placeholder="Ingresar ID a buscar"
          style={styles.inputSearch}
          value={idBuscar}
          onChangeText={setIdBuscar}
          keyboardType="numeric"
        />
        <Button title="Buscar" onPress={buscar} color="black" />
      </View>

      <View style={styles.editSection}>
        <Text style={styles.label}>Monto:</Text>
        <TextInput 
          style={styles.input} 
          value={monto} 
          onChangeText={setMonto} 
          keyboardType="numeric"
        />

        <Text style={styles.label}>Categoría:</Text>
        <TextInput 
          style={styles.input} 
          value={categoria} 
          onChangeText={setCategoria} 
        />

        <Text style={styles.label}>Descripción:</Text>
        <TextInput 
          style={styles.input} 
          value={descripcion} 
          onChangeText={setDescripcion} 
          multiline
        />

        <View style={styles.buttonRow}>
          <Button 
            title="Editar" 
            onPress={editar} 
            color="#4CAF50" 
            disabled={!encontrado}
          />
          <Button 
            title="Eliminar" 
            onPress={eliminar} 
            color="#F44336" 
            disabled={!encontrado}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchSection: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  inputSearch: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  editSection: {
    gap: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});