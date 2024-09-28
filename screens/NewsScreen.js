import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebase';

export default function NewsFeedScreen() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsSnapshot = await db.collection('sustainabilityNews').get();
      const newsData = newsSnapshot.docs.map(doc => doc.data());
      setNews(newsData);
    };
    
    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Text style={styles.title}>{item.title}</Text>
            {item.imageURL && <Image source={{ uri: item.imageURL }} style={styles.image} />}
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  newsItem: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});






