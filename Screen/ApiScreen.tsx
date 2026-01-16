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
      <Text style={styles.title}>LISTA API</Text>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.description}</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30, 
  },
});