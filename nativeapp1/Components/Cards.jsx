import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios'; // Importing axios
import SweetAlert from 'react-native-sweet-alert';

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API using axios
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data); // Setting the API data
      })
      .catch((error) => {
        console.error(error); // Logging error in case of failure
      });
  }, []);

  const handleAlert = () => {
    SweetAlert.showAlertWithOptions({
      title: 'HAPPY SHOPPING',
      confirmButtonTitle: 'OK',
      confirmButtonColor: '#000',
      style: 'success',
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
            <Button title="Buy Now" onPress={handleAlert} color="#018C8D" />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#018C8D',
  },
  price: {
    fontSize: 16,
    color: '#018C8D',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 15,
    color: '#555',
  },
});

export default Cards;
