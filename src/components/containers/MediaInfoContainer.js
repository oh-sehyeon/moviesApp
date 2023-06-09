import { Box, Center, Text, Image } from 'native-base'
import { View, StyleSheet } from 'react-native';

const MediaInfoContainer = ({ route }) => {
  const { image, title, name, releaseDate, popularity, overview } = route.params;
  return (
    <Box width='100%'>
      <Center py={10}>
        {title && !name && ( <Text style={styles.title}>{title}</Text> )}
        {!title && name && ( <Text style={styles.title}>{name}</Text> )}
        {title && !name &&( <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} 
        style={{width: 200, height: 250, marginBottom: 20}} 
        alt={title}/> )}
        {!title && name && ( <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} 
        style={{width: 200, height: 250, marginBottom: 20}} 
        alt={name}/> )}
        <View style={styles.infoContainer}>
        <Text>{overview}</Text>
          <View style={styles.subInfoCont}>
            <Text>Poupulariy: {popularity}</Text> 
            <Text>Release Date: {releaseDate}</Text>
          </View>
        </View>
          
      </Center>
    </Box>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 30,
    fontSize: 20
  },
  infoContainer: {
    paddingLeft: 30,
    paddingRight: 30
  },
  subInfoCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  }
})

export default MediaInfoContainer
