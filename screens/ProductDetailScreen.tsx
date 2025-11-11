import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useProducts } from '../context/ProductContext';
import { CatalogStackParamList } from '../navigation/NavigationTypes';

type ProductDetailRouteProp = RouteProp<CatalogStackParamList, 'ProductDetail'>;

export default function ProductDetailScreen() {

  const route = useRoute<ProductDetailRouteProp>();
  
  const { products } = useProducts();
  const product = products.find(p => p.id === route.params.productId);

  if (!product) {
    return <View><Text>Produto não encontrado!</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.imageUri }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.user}>Vendido por: {product.user}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 300 },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 22, color: 'green', fontWeight: 'bold', marginBottom: 16 },
  user: { fontSize: 16, color: '#555', marginBottom: 8, fontStyle: 'italic' },
  description: { fontSize: 16, lineHeight: 24 }
});