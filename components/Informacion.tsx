import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';


export default function Informacion({ item }: any) {
  
  const mostrarDetalle = () => {
    
    Alert.alert(
      "Detalle", 
      `Categoría: ${item.categoria}\nMonto: $${item.monto}\nDescripción: ${item.descripcion}`
    );
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={mostrarDetalle}>
      {/* [cite: 30] Mostrar únicamente un campo (Ej: Categoría) */}
      <Text style={styles.text}>Categoría: {item.categoria}</Text>
      <Text style={styles.subtext}>(Toque para ver más)</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: { fontSize: 16, fontWeight: 'bold' },
  subtext: { fontSize: 12, color: 'gray', marginTop: 3 }
});