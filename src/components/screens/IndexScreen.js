import MoviesContainer from '../containers/MoviesContainer'
import ShowsContainer from "../containers/ShowsContainer"
import SearchContainer from "../containers/SearchContainer"
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react'

const IndexScreen = ({ navigation }) => {

    const [active, setActive] = useState("movies");

    const renderTab = () => {
        if (active === "movies") {
            return <MoviesContainer navigation={navigation}/>
        } else if (active === "search") {
            return <SearchContainer navigation={navigation}/>
        } else if (active === "shows") {
            return <ShowsContainer navigation={navigation}/>
        }
    }

    return(
        <View >
            <View style={styles.tabContainer}>
                <Text
                    onPress={() => setActive("movies")}
                    style={styles.tabMenuText}
                >
                    Movies</Text>
                <Text 
                    onPress={() => setActive("search")}
                    style={styles.tabMenuText}
                >
                    Search</Text>
                <Text
                    onPress={() => setActive("shows")}
                    style={styles.tabMenuText}
                >
                    TV Shows</Text>
            </View>
            {renderTab()}
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: "#909090"
    },
    tabMenuText: {
        color: "#F0F0F0",
        fontWeight: "bold"
    }
})

export default IndexScreen