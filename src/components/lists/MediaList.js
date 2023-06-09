import { FlatList } from 'react-native'
import MediaCard from '../listItems/MediaCard'

const MediaList = props => {
  const { navigation, media } = props

  return (
    <FlatList
      data={media}
      style={{marginTop: 10}}
      renderItem={({ item }) => (
        <MediaCard
          image={item.poster_path}
          title={item.title}
          name={item.name}
          releaseDate={item.release_date}
          firstAirDate={item.first_air_date}
          popularity={item.popularity}
          overview={item.overview}
          navigation={navigation}
        />
      )}
    />
  )
}

export default MediaList
