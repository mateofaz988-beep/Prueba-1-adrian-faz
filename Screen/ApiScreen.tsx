import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default function ApiScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jritsqmet.github.io/web-api/crash.json')
      .then(res => res.json())
      .then(setData); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LISTA DE CRASH</Text>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
             
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', 
    paddingTop: 50,
  },
  title: {
    fontSize: 26, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000', 
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#777777ea', 
    marginBottom: 10,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingRight: 15,
  },
  name: {
    fontSize: 22, 
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 5,
  },
  description: {
    fontSize: 16, 
    color: '#fff', 
  },
  image: {
    width: 85,   
    height: 85,
    borderRadius: 10, 
  },
});