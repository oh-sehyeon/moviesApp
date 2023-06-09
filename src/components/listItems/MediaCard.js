import React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

const MediaCard = props => {
  const { image, title, name, releaseDate, firstAirDate, popularity, overview, navigation } = props
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{ width: 80, height: 80 }} />
      </View>
      <View style={styles.infoCont}>
        {title && ( <Text style={styles.title}>{title}</Text> )}
        {!title && name && ( <Text style={styles.title}>{name}</Text> )}
        <Text>Popularity: {popularity}</Text>
        {title && !name && ( <Text>Release Date: {releaseDate}</Text> )}
        {!title && name && ( <Text>Release Date: {firstAirDate}</Text> )}
        <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Info', {
            title,
            name,
            image,
            overview,
            popularity,
            releaseDate,
            firstAirDate
          });
        }}          
        >
          <Text style={styles.buttonText}>More Details</Text>
        </Pressable>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 15
  },

  imgCont: {
      flex: 1,
      display: "block"
  },
  infoCont: {
      flex: 3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      paddingLeft: 5,
      paddingRight: 50,
      width: "95%"
  }, 
  title: {
      fontWeight: "bold"
  },
  button: {
      padding: 0,
      backgroundColor: "#2bbcd6",
      borderRadius: 5,
      paddingTop: 10,
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 10,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonText: {
      color: "#FEFEFE"
  }
})

export default MediaCard
