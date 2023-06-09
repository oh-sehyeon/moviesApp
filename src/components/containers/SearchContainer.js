import { useState, useEffect } from 'react'
import { View, Select } from 'native-base'
import { StyleSheet } from 'react-native';
import MediaList from '../lists/MediaList'
import Form from '../forms/Form'

const SearchContainer = props => {
    const [selectedValue, setSelectedValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [media, setMedia] = useState([]);
    const { navigation } = props

    useEffect(() => {
    fetchMedias();
    }, [selectedValue, inputValue]);

    const fetchMedias = async () => {
        const url = `http://api.themoviedb.org/3/search/${selectedValue}?query=${inputValue}&api_key=8ec942643846f64d66eed102868455f3`;
        const apiCall = await fetch(url);
        const response = await apiCall.json();
        setMedia(response.results);
    };

    const handleValueChange = (type) => {
        setSelectedValue(type);
    };

    const handleInputChange = (value) => {
        setInputValue(value);
    };


    return (
        <View>
            <Select
            mode="dropdown"
            placeholder="Select an option"
            onValueChange={handleValueChange}
            selectedValue={selectedValue}
            style={styles.dropdown}>
                <Select.Item label="Movie" value="movie" />
                <Select.Item label="Multi" value="multi" />
                <Select.Item label="TV" value="tv" />
            </Select>
            <Form onInputChange={handleInputChange} setInputValue={setInputValue} />
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

export default SearchContainer