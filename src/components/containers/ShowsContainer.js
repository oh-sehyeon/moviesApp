import { useState, useEffect } from 'react'
import { View, Select } from 'native-base'
import { StyleSheet } from 'react-native';
import MediaList from '../lists/MediaList'

const ShowsContainer = props => {
    const [selectedValue, setSelectedValue] = useState('airing_today');
    const [media, setMedia] = useState([])
    const { navigation } = props

    useEffect(() => {
        fetchMedias();
    }, [selectedValue]);

    const fetchMedias = async () => {
        const url = `http://api.themoviedb.org/3/tv/${selectedValue}?language=en-US&api_key=8ec942643846f64d66eed102868455f3`;
        const apiCall = await fetch(url);
        const response = await apiCall.json();
        setMedia(response.results);
    };

const handleValueChange = (type) => {
    setSelectedValue(type);
};

    return (
        <View>
            <Select
            mode="dropdown"
            placeholder="Select an option"
            onValueChange={handleValueChange}
            selectedValue={selectedValue}
            style={styles.dropdown}>
                <Select.Item label="Airing Today" value="airing_today" />
                <Select.Item label="On the Air" value="on_the_air" />
                <Select.Item label="Popular" value="popular" />
                <Select.Item label="Top Rated" value="top_rated" />
            </Select>
            <MediaList navigation={navigation} media={media} />
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        paddingTop: 15,
        paddingBottom: 15,
    }
})

export default ShowsContainer