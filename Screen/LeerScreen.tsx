import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import Informacion from '../components/Informacion';
import { db } from '../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';

export default function LeerScreen() {
  const [filtroId, setFiltroId] = useState('');
  const [registroEncontrado, setRegistroEncontrado] = useState<any>(null);
  const [lista, setLista] = useState<any[]>([]);

  useEffect(() => {
    
    const dbRef = ref(db, 'recordatorios/');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray: any[] = [];
      
      if (data) {
        Object.keys(data).forEach(key => {
          dataArray.push(data[key]);
        });
      }
      setLista(dataArray);
    });
  }, []);

  const buscarPorId = () => {
    const encontrado = lista.find(item => item.id === filtroId);
    if (encontrado) {
      setRegistroEncontrado(encontrado);
    } else {
      Alert.alert('Aviso', 'ID no encontrado');
      setRegistroEncontrado(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filtrar por ID</Text>
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Ingresar ID" 
          style={styles.input} 
          value={filtroId}
          onChangeText={setFiltroId}
          keyboardType="numeric"
        />
        <Button title="Leer" onPress={buscarPorId} />
      </View>

      {registroEncontrado && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resultado:</Text>
          <Text>Monto: ${registroEncontrado.monto}</Text>
          <Text>Categoría: {registroEncontrado.categoria}</Text>
          <Text>Desc: {registroEncontrado.descripcion}</Text>
        </View>
      )}

      <View style={styles.divider} />

      <Text style={styles.header}>Lista de Categorías</Text>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Informacion item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
  },
  card: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});